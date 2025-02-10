import { setCookie, getCookie } from "cookies-next/client";
import { useState } from "react";

export function useRememberMe<ShapeFields extends Record<string, unknown>>() {
  const [fields, setFields] = useState<ShapeFields>();
  const cookiePrefix = `remember`;

  /**
   * @function saveReferenceToken
   * - A função é responsável por armazenar um token para alguma operação do tipo "rememberMe" nos cookies,
   * seguindo os padrões, que é a introdução do prefixo "remember" na chave.
   *
   * @param {ShapeFields} props O objeto contendo os indices e valores que serão armazenado nos cookies.
   */
  const saveReferenceToken = (props: ShapeFields) => {
    Object.entries(props).forEach(([key, value]) => {
      setCookie(`${cookiePrefix}_${key}`, value, {
        secure: process.env.NEXT_AMBIENT == "PROD",
      });
    });

    setFields(props);
  };

  /**
   * @function updateReferenceToken
   * - A função irá atualizar nos cookies substituindo o valor armazenado.
   *
   * @param {ShapeFields} props O objeto contendo os indices e valores que serão atualizados nos cookies.
   */
  const updateReferenceToken = (props: ShapeFields) => {
    saveReferenceToken(props);
    setFields(props);
  };

  /**
   * @function getReferenceToken
   * - A função irá capturar os indices definidos pelo usuário nos cookies e retornar seus valores como um objeto.
   *
   * @param {string[]} keys As chaves(indexes) dos valores que busca nos cookies.
   * @returns {ShapeFields} O objeto contendo os valores solicitados.
   */
  const getReferenceToken = (keys: string[]) => {
    const cookieFields = {} as Record<string, unknown>;

    keys.forEach((key) => {
      const cookieValue = getCookie(`${cookiePrefix}_${key}`);

      if (cookieValue) {
        cookieFields[key] = cookieValue;
      }
    });

    setFields(cookieFields as ShapeFields);
    return cookieFields;
  };

  return {
    saveReferenceToken,
    updateReferenceToken,
    getReferenceToken,
    fields,
  };
}
