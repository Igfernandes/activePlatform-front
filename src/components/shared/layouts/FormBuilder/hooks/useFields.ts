import { FieldError, useFormContext } from "react-hook-form";
import { InputProps } from "../fields/Input/type";
import { useCallback, useMemo, useState } from "react";
import { useI18n } from "@contexts/I18n";

type Props = InputProps;

export function useFields({ name, required }: Props) {
  const { t } = useI18n();
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const [requiredError, setRequiredError] = useState<FieldError | null>(null);
  const value = watch(name as string);
  const error = useMemo(() => {
    return errors[name as string] ?? requiredError;
  }, [errors, name, requiredError]);

  const handleHasError = useCallback((targetValue?:string) => {
    if (!required) return;

    if (!value && !targetValue)
      setRequiredError({
        type: "required",
        message: t("Validations.required"),
      });
    else setRequiredError(null);
  }, [required, t, value]);

  return {
    error,
    handleHasError,
    value,
  };
}
