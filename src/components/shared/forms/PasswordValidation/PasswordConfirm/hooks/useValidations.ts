import { useEffect, useState } from "react";
import { StatusValidation, ValidationProps } from "../../type";
import { useFormContext } from "react-hook-form";

export function useValidations({ password }: ValidationProps) {
  const [validationsStatus, setValidationsStatus] =
    useState<StatusValidation>("void");
  const { watch } = useFormContext();
  const passwordConfirm = watch("passwordConfirm");

  useEffect(() => {
    if (!password) return setValidationsStatus("void");

    setValidationsStatus(
      password === watch("passwordConfirm") ? "success" : "error"
    );
  }, [password, passwordConfirm, watch]);

  return {
    validationsStatus,
  };
}
