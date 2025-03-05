import { useFormRules } from "@hooks/Forms/useFormRules";
import { ServicesModalSchema, ServicesPayload } from "../schemas";

export function useServicesForm() {
  const { formMethods, register } = useFormRules<ServicesPayload>({
    schema: ServicesModalSchema,
  });

  return {
    formMethods,
    register,
  };
}
