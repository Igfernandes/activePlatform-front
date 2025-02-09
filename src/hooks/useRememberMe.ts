import { setCookie, getCookie } from "cookies-next/client";
import { useState } from "react";

export function useRememberMe<ShapeFields extends Record<string, unknown>>() {
  const [fields, setFields] = useState<ShapeFields>();
  const cookiePrefix = `remember`;

  const saveReferenceToken = (props: ShapeFields) => {
    Object.entries(props).forEach(([key, value]) => {
      setCookie(`${cookiePrefix}_${key}`, value, {
        secure: process.env.NEXT_AMBIENT == "PROD",
      });
    });

    setFields(props);
  };

  const updateReferenceToken = (props: ShapeFields) => {
    saveReferenceToken(props);
    setFields(props);
  };

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
