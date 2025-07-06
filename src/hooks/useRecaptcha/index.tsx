import { useCallback, useRef, useState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";

export function useRecaptcha() {
  const turnstile = useTurnstile();
  const [token, setToken] = useState<string>("");
  const SITE_KEY = useRef<string>(process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY);

  const Recaptcha = useCallback(() => {
    if (!SITE_KEY.current) return <></>;

    return (
      <Turnstile
        sitekey={SITE_KEY.current}
        onVerify={(token) => {
          setToken(token);
        }}
      />
    );
  }, [SITE_KEY]);

  const loadReCaptcha = useCallback(() => {
    if (turnstile) turnstile.reset();
  }, []);

  return { token, loadReCaptcha, Recaptcha };
}
