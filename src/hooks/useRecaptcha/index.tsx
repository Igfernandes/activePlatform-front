import { useEffect, useRef, useState } from "react";
import { Recaptcha } from "./recaptcha";

export function useRecaptcha() {
  const [token, setToken] = useState<string>("");
  const [isLoadingRecaptcha, SetIsLoadingRecaptcha] = useState<boolean>(false);
  const SITE_KEY = useRef<string>(process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY);

  useEffect(() => {
    if (typeof window == "undefined") return;

    if (window.turnstile) {
      window.turnstile.render("[data-recaptcha]", {
        sitekey: SITE_KEY.current,
        callback: (token: string) => {
          setToken(token);
        },
      });
    }
  }, [SITE_KEY, isLoadingRecaptcha]);

  const loadReCaptcha = () => {
    SetIsLoadingRecaptcha(!isLoadingRecaptcha);
  };

  return { token, loadReCaptcha, Recaptcha };
}
