import { createUserFormSchema, CreateUserPayload } from "../schemas";
import { useFormRules } from "@hooks/Forms/useFormRules";

type Payload = CreateUserPayload;

export function useForm() {
  const { formMethods, hasAllFilledFields } = useFormRules<Payload>({
    schema: createUserFormSchema,
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;

  const onSubmit = async () => {};

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
