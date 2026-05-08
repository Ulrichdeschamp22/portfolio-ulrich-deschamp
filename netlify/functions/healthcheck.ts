import { Handler } from "@netlify/functions";
import { keepAlive } from "../../src/server/keepAlive";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "GET" && event.httpMethod !== "HEAD") {
    return {
      statusCode: 405,
      headers: { Allow: "GET, HEAD", "Content-Type": "application/json" },
      body: JSON.stringify({ ok: false, time: new Date().toISOString() }),
    };
  }

  const result = await keepAlive();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify({ ok: true, time: result.time }),
  };
};
