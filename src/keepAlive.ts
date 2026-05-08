let browserKeepAliveStarted = false;

async function keepAlive() {
  try {
    const response = await fetch("/api/healthcheck", {
      method: "GET",
      cache: "no-store",
    });

    console.log("Supabase keep alive OK", new Date().toISOString(), response.status);
  } catch (error) {
    console.error("Erreur keep alive Supabase :", error);
  }
}

export function startBrowserKeepAlive() {
  if (browserKeepAliveStarted || typeof window === "undefined") {
    return;
  }

  browserKeepAliveStarted = true;
  void keepAlive();
  window.setInterval(() => {
    void keepAlive();
  }, 10 * 60 * 1000);
}

export default keepAlive;
