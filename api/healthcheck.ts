import { keepAlive } from "../src/server/keepAlive";

export default async function handler(req: any, res: any) {
  if (req.method && req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).json({ ok: false, time: new Date().toISOString() });
  }

  const result = await keepAlive();

  return res.status(200).json({
    ok: true,
    time: result.time,
  });
}
