import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    captchaOnLoad: () => void;
    grecaptcha: ReCaptchaInstance;
  }
}

interface ReCaptchaInstance {
  ready: (cb: () => unknown) => unknown;
  execute: (key: string, options: ReCaptchaExecuteOptions) => Promise<string>;
  render: (id: string, options: ReCaptchaRenderOptions) => unknown;
}

interface ReCaptchaExecuteOptions {
  action: string;
}

interface ReCaptchaRenderOptions {
  sitekey: string;
  size: "invisible";
}

export function useRecaptcha(siteKey: string, action: string) {
  const [token, setToken] = useState("");
  const handleLoaded = useCallback(() => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action: action })
        .then((token) => setToken(token));
    });
  }, [action, siteKey]);

  const loadReCaptcha = useCallback(() => {
    const script = document.createElement("script");
    script.src = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}`;
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, [handleLoaded, siteKey]);

  useEffect(() => {
    loadReCaptcha();
  }, []);

  return { token };
}
