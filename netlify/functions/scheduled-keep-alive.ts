import { keepAlive } from "../../src/server/keepAlive";

export const config = {
  schedule: "*/10 * * * *",
};

export default async () => {
  const result = await keepAlive();

  return new Response(JSON.stringify({ ok: true, time: result.time }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
