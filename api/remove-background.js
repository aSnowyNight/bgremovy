import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const config = {
  api: {
    bodyParser: false
  }
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const GLOBAL_BETA_LIMIT = 80;

const redis = Redis.fromEnv();
const visitorLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, "1 h"),
  prefix: "removy-visitor"
});

function sendJson(res, status, payload) {
  res.setHeader("Content-Type", "application/json");
  return res.status(status).send(JSON.stringify(payload));
}

async function readRequestBody(req, limit) {
  const chunks = [];
  let totalSize = 0;

  for await (const chunk of req) {
    totalSize += chunk.length;

    if (totalSize > limit) {
      const error = new Error("FILE_TOO_LARGE");
      error.code = "FILE_TOO_LARGE";
      throw error;
    }

    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function getImageFromMultipart(body, contentType) {
  const boundaryMatch = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);

  if (!boundaryMatch) {
    throw new Error("Missing multipart boundary");
  }

  const boundary = Buffer.from(`--${boundaryMatch[1] || boundaryMatch[2]}`);
  let cursor = 0;

  while (cursor < body.length) {
    const partStart = body.indexOf(boundary, cursor);
    if (partStart === -1) break;

    const headerStart = partStart + boundary.length;
    const headerEnd = body.indexOf(Buffer.from("\r\n\r\n"), headerStart);
    if (headerEnd === -1) break;

    const headers = body.subarray(headerStart, headerEnd).toString("utf8");
    const nextBoundary = body.indexOf(boundary, headerEnd + 4);
    if (nextBoundary === -1) break;

    const partBodyEnd = nextBoundary - 2;
    const partBody = body.subarray(headerEnd + 4, partBodyEnd);
    const isImageField = /name="image"/i.test(headers) && /filename="/i.test(headers);

    if (isImageField) {
      const mimeMatch = headers.match(/Content-Type:\s*([^\r\n]+)/i);

      return {
        buffer: partBody,
        mimeType: mimeMatch ? mimeMatch[1].trim().toLowerCase() : ""
      };
    }

    cursor = nextBoundary;
  }

  throw new Error("No image field was found");
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (Array.isArray(forwardedFor)) return forwardedFor[0];
  if (typeof forwardedFor === "string" && forwardedFor.length) {
    return forwardedFor.split(",")[0].trim();
  }

  return "unknown";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, {
      error: "only POST requests belong here :["
    });
  }

  const briaApiKey = process.env.BRIA_API_KEY;

  if (!briaApiKey) {
    console.error("Missing BRIA_API_KEY environment variable.");
    return sendJson(res, 500, {
      error: "server setup oopsie: the Bria API key is missing :["
    });
  }

  const incomingType = req.headers["content-type"] || "";

  if (!incomingType.startsWith("multipart/form-data")) {
    return sendJson(res, 400, {
      error: "please send an image upload :["
    });
  }

  try {
    const ip = getClientIp(req);
    const visitorResult = await visitorLimit.limit(ip);

    if (!visitorResult.success) {
      const secondsUntilReset = Math.max(
        1,
        Math.ceil((visitorResult.reset - Date.now()) / 1000)
      );

      res.setHeader("Retry-After", String(secondsUntilReset));
      return sendJson(res, 429, {
        error: "u used both free removies for this hour :[ please try again later :3"
      });
    }

    const totalUsed = Number((await redis.get("removy:successful-removals")) || 0);

    if (totalUsed >= GLOBAL_BETA_LIMIT) {
      return sendJson(res, 503, {
        error: "the free removy budget is used up for now :[ thanks for helping test it :3"
      });
    }

    const body = await readRequestBody(req, MAX_FILE_SIZE);
    const { buffer, mimeType } = getImageFromMultipart(body, incomingType);

    const allowedTypes = new Set([
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp"
    ]);

    if (!allowedTypes.has(mimeType)) {
      return sendJson(res, 415, {
        error: "please choose a JPG, PNG, or WebP image :["
      });
    }

    const base64Image = buffer.toString("base64");

    const briaResponse = await fetch(
      "https://engine.prod.bria-api.com/v2/image/edit/remove_background",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_token: briaApiKey
        },
        body: JSON.stringify({
          image: base64Image,
          preserve_alpha: true,
          sync: true
        })
      }
    );

    if (!briaResponse.ok) {
      const details = await briaResponse.text();
      console.error("Bria provider failed:", briaResponse.status, details.slice(0, 800));

      if (briaResponse.status === 401 || briaResponse.status === 403) {
        return sendJson(res, 502, {
          error: "the Bria API key needs fixing :["
        });
      }

      if (briaResponse.status === 402 || briaResponse.status === 429) {
        return sendJson(res, 429, {
          error: "the removy budget is resting right now—please try again later :["
        });
      }

      if (briaResponse.status === 415) {
        return sendJson(res, 415, {
          error: "Bria needs a JPG, PNG, or WebP image :["
        });
      }

      if (briaResponse.status === 422) {
        return sendJson(res, 422, {
          error: "this image could not be processed by the removy service :["
        });
      }

      return sendJson(res, 502, {
        error: "the removy service had a little oopsie. please try again :["
      });
    }

    const briaData = await briaResponse.json();
    const outputUrl = briaData?.result?.image_url;

    if (!outputUrl) {
      console.error("Bria returned no image_url:", briaData);
      return sendJson(res, 502, {
        error: "Bria did not return a finished image :["
      });
    }

    const imageResponse = await fetch(outputUrl);

    if (!imageResponse.ok) {
      console.error("Could not download Bria result:", imageResponse.status);
      return sendJson(res, 502, {
        error: "the finished image could not be downloaded :["
      });
    }

    const finalImage = Buffer.from(await imageResponse.arrayBuffer());

    if (!finalImage.length) {
      return sendJson(res, 502, {
        error: "the finished image came back empty :["
      });
    }

    const newUsedCount = await redis.incr("removy:successful-removals");

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", 'inline; filename="no-background.png"');
    res.setHeader("Cache-Control", "no-store, max-age=0");
    res.setHeader(
      "X-Removy-Calls-Left",
      String(Math.max(0, GLOBAL_BETA_LIMIT - newUsedCount))
    );

    return res.status(200).send(finalImage);
  } catch (error) {
    console.error("remove-background error:", error);

    if (error.code === "FILE_TOO_LARGE") {
      return sendJson(res, 413, {
        error: "that image is over 10 MB—please choose a smaller one :["
      });
    }

    return sendJson(res, 500, {
      error: "something went wrong in the removy backend :["
    });
  }
}
