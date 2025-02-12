import { FieldValues, useForm as useFormReactHook } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

type Props<FieldsKey> = {
  schema: ZodType;
  exclude?: Array<FieldsKey>;
};

export function useFormRules<Payload extends FieldValues>({
  schema,
  exclude = [],
}: Props<keyof Payload>) {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = formMethods;

  /**
   * @function hasAllFilledFields
   * - A função irá retornar o status em boolean sobre o preenchimento de todos os campos obrigatórios.
   *
   * @returns {boolean}
   */
  const hasAllFilledFields = (): boolean => {
    const payload = getValues();

    exclude.forEach((field) => {
      delete payload[field];
    });
    const fieldsValue = Object.values(payload);

    const isAllPositiveValues = fieldsValue.every((value) => !!value);
    if (!isAllPositiveValues || fieldsValue.length == 0) return false;

    if (Object.values(errors).length > 0) return false;

    return true;
  };

  return {
    register,
    handleSubmit,
    errors,
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
