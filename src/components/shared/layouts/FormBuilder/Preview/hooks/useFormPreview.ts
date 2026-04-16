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

  /**
   * SCHEMA DINÂMICO
   */
  const schema = useMemo(() => {
    if (!fields?.length) return z.object({});

    return z.object(
      fields.reduce((acc: Record<string, z.ZodTypeAny>, field) => {
        if (field.group === "layout") return acc;

        const name = `input_${field.id}`;

        /**
         * FILE FIELD (CORRIGIDO)
         */
        if (field.element === "file") {
          acc[name] = z.any();
          return acc;
        }

        /**
         * TEXT / DEFAULT FIELD
         */
        if (field.required) {
          acc[name] = z
            .string({ required_error: t("Validations.required") })
            .min(1, { message: t("Validations.required") });
        } else {
          acc[name] = z.string().optional();
        }

        return acc;
      }, {}),
    );
  }, [fields, t]);

  /**
   * DEFAULT VALUES (CORRIGIDO)
   */
  const defaultValues = useMemo(() => {
    return fields.reduce(
      (acc, field) => {
        if (field.group === "layout") return acc;

        const name = `input_${field.id}`;

        /**
         * IMPORTANTE: file NÃO pode ser "" nem undefined "fake"
         */
        if (field.element === "file") {
          acc[name] = undefined;
          return acc;
        }

        acc[name] = "";
        return acc;
      },
      {} as Record<string, unknown>,
    );
  }, [fields]);

  /**
   * RHF WRAPPER
   */
  const { formMethods, errors } = useFormRules({
    schema,
    defaultValues,
  });

  return {
    formMethods,
    errors,
  };
}
