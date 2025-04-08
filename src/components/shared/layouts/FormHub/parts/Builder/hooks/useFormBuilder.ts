import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormBuilderPayload, formBuilderSchema } from "../schema";
import { useFieldContext } from "../../../context";
import useDeleteFields from "@services/Fields/Delete/useDelete";

export function useFormBuilder() {
  const { formMethods, errors } = useFormRules<FormBuilderPayload>({
    schema: formBuilderSchema,
  });
  const { handleSubmit, register } = formMethods;
  const { handleSubmitFields, viewedField, entityType } = useFieldContext();
  const { mutateAsync: deleteField } = useDeleteFields();

  const submit = (payload: FormBuilderPayload) => {
    handleSubmitFields(viewedField.id, {
      fields: payload.fields.map((field) => ({
        value: field.value,
        id: parseInt(field.id),
      })),
    });
  };

  return {
    register,
    handleSubmit,
    formMethods,
    errors,
    submit,
    deleteField,
    entityType
  };
}
