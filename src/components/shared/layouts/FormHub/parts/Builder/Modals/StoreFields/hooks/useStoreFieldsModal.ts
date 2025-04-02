import { useFormRules } from "@hooks/Forms/useFormRules";
import { StoreFieldsPayload, StoreFieldsSchema } from "../schemas";
import usePostCreateFields from "@services/Fields/Post/usePostCreateFields";
import { useFieldContext } from "@components/shared/layouts/FormHub/context";

export function useStoreFieldsModal() {
  const { entityType } = useFieldContext();
  const { formMethods, errors, handleSubmit, register } =
    useFormRules<StoreFieldsPayload>({
      schema: StoreFieldsSchema,
      defaultValues: {
        is_file: "NOT",
        is_required: "NOT",
        is_sensitive: "NOT"
      }
    });
  const { mutateAsync: postFields } = usePostCreateFields();

  const submit = ({
    is_file,
    is_required,
    is_sensitive,
    group,
    ...payload
  }: StoreFieldsPayload) => {
    postFields({
      ...payload,
      scope: entityType,
      is_required: is_required == "YES",
      is_sensitive: is_sensitive == "YES",
      is_file: is_file === "YES",
      group_id: parseInt(group),
    });
  };

  return {
    formMethods,
    submit,
    errors,
    handleSubmit,
    register,
  };
}
