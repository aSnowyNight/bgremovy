import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const GLOBAL_BETA_LIMIT = 90;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  try {
    const totalUsed = Number(
      (await redis.get("removy:successful-removals")) || 0
    );

    const callsLeft = Math.max(0, GLOBAL_BETA_LIMIT - totalUsed);

    res.setHeader("Cache-Control", "no-store, max-age=0");
    return res.status(200).json({ callsLeft });
  } catch (error) {
    console.error("budget endpoint error:", error);
    return res.status(500).json({
      error: "could not load the removy budget"
    });
  }
}
