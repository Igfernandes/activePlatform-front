import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormBuilderPayload, formBuilderSchema } from "../schema";

export function useFormBuilder() {
  const { formMethods, errors } = useFormRules<FormBuilderPayload>({
    schema: formBuilderSchema,
  });
  const { handleSubmit, register } = formMethods;

  const submit = (payload: FormBuilderPayload) => {
    console.log(payload);
  };

  return {
    register,
    handleSubmit,
    formMethods,
    errors,
    submit,
  };
}
