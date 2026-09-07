export const config = {
  api: {
    bodyParser: false
  }
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function sendJson(res, status, payload) {
  res.setHeader("Content-Type", "application/json");
  res.status(status).send(JSON.stringify(payload));
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, {
      error: "only POST requests belong here :["
    });
  }

  const token = process.env.HF_TOKEN;

  if (!token) {
    console.error("Missing HF_TOKEN environment variable.");
    return sendJson(res, 500, {
      error: "server setup oopsie: the API token is missing :["
    });
  }

  const incomingType = req.headers["content-type"] || "";

  if (!incomingType.startsWith("multipart/form-data")) {
    return sendJson(res, 400, {
      error: "please send an image upload :["
    });
  }

  try {
    /*
      The current front end sends FormData. This function forwards that
      multipart request without saving the image to Vercel storage.
    */
    const originalBody = await readRequestBody(req, MAX_FILE_SIZE);

    /*
      IMPORTANT:
      Replace this URL only after confirming which hosted provider/model
      you are using and its current API requirements.

      This is an example router path, not a promise of free/unlimited access.
    */
    const providerResponse = await fetch(
      "https://router.huggingface.co/hf-inference/models/briaai/RMBG-2.0",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": incomingType,
          Accept: "image/png,application/json"
        },
        body: originalBody
      }
    );

    if (!providerResponse.ok) {
      const providerText = await providerResponse.text();
      console.error(
        "Background provider failed:",
        providerResponse.status,
        providerText.slice(0, 500)
      );

      if (providerResponse.status === 401 || providerResponse.status === 403) {
        return sendJson(res, 502, {
          error: "the removy service authorization needs fixing :["
        });
      }

      if (providerResponse.status === 429) {
        return sendJson(res, 429, {
          error: "the free removy budget is resting right now—please try again later :["
        });
      }

      if (providerResponse.status === 503) {
        return sendJson(res, 503, {
          error: "the removy AI is waking up—wait a moment and try again :3"
        });
      }

      return sendJson(res, 502, {
        error: "the removy service had a little oopsie. please try again :["
      });
    }

    const resultBytes = Buffer.from(await providerResponse.arrayBuffer());

    if (resultBytes.length === 0) {
      return sendJson(res, 502, {
        error: "the removy service returned an empty image :["
      });
    }

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", 'inline; filename="no-background.png"');
    res.setHeader("Cache-Control", "no-store, max-age=0");
    return res.status(200).send(resultBytes);
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
