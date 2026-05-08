type KeepAliveEnv = {
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
};

type KeepAliveResult = {
  ok: boolean;
  time: string;
  status?: number;
  error?: string;
};

const getEnvValue = (key: keyof KeepAliveEnv): string | undefined => {
  if (typeof process !== "undefined" && process.env?.[key]) {
    return process.env[key];
  }

  return undefined;
};

export async function keepAlive(env?: KeepAliveEnv): Promise<KeepAliveResult> {
  const SUPABASE_URL = env?.SUPABASE_URL ?? getEnvValue("SUPABASE_URL");
  const SUPABASE_ANON_KEY = env?.SUPABASE_ANON_KEY ?? getEnvValue("SUPABASE_ANON_KEY");
  const time = new Date().toISOString();

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    const error = "Variables SUPABASE_URL ou SUPABASE_ANON_KEY manquantes";
    console.error("Erreur keep alive Supabase :", error);
    return { ok: false, time, error };
  }

  try {
    const response = await fetch(`${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/`, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Supabase keep alive OK", time, response.status);

    return {
      ok: response.ok,
      time,
      status: response.status,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Erreur keep alive Supabase :", error);
    return { ok: false, time, error: message };
  }
}

let intervalStarted = false;

export function startKeepAlive(env?: KeepAliveEnv) {
  if (intervalStarted) {
    return;
  }

  intervalStarted = true;
  void keepAlive(env);
  setInterval(() => {
    void keepAlive(env);
  }, 10 * 60 * 1000);
}

export default keepAlive;
