import { useCallback, useEffect, useState } from "react";

export function useRecaptcha(siteKey: string, action: string) {
  const [token, setToken] = useState("");

  /**
   * @function handleLoaded
   * - O evento irá enviar uma solicitação para o servidor da google com as credenciais necessárias fornecidas
   * pelo arquivo ".env" para recuperar o token de referência do recaptcha. O evento irá ocorrer toda vez que for
   * renderizado a tela pelo evento "load".
   */
  const handleLoaded = useCallback(() => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action: action })
        .then((token) => setToken(token));
    });
  }, [action, siteKey]);

  /**
   * @function loadReCaptcha
   * - A função irá ser responsável por organizar as regras necessárias para o funcionando do recaptcha no sistema,
   * determinando a ordem de precedência de execução das coisas e o que mais for necessário.
   */
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
