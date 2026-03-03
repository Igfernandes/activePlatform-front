import { FieldShape } from "../../type";
import { useMemo } from "react";
import z from "zod";
import { useI18n } from "@contexts/I18n";
import { useFormRules } from "@hooks/Forms/useFormRules";

type Props = {
  fields: Array<FieldShape>;
};
export function useFormPreview({ fields }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => {
    if (fields.length === 0) return z.object({});

    return z.object(
      fields.reduce((acc: Record<string, z.ZodTypeAny>, field) => {
        if (field.group === "layout") return acc;
        const name = `input_${field.id}`;
        console.log(name, field.label, field.required, field,"field--") // Log the field name and required status
        if (field.required) {
          acc[name] = z
            .string({ required_error: t("Validations.required") })
            .min(1, {
              message: t("Validations.required"),
            })
            .nonempty({ message: t("Validations.required") });
        } else {
          acc[name] = z.string().optional();
        }
        return acc;
      }, {})
    );
  }, [fields, t]);

  const defaultValues = useMemo(() => {
    return fields.reduce((acc, field) => {
      if (field.group === "layout") return acc;
      acc[`input_${field.id}`] = "";
      return acc;
    }, {} as Record<string, string>);
  }, [fields]);

  const { formMethods, errors } = useFormRules({
    schema,
    defaultValues,
  });
console.log(errors, "form preview errors")
  return {
    formMethods,
    errors,
  };
}
