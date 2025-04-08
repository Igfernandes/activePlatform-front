import { useFormRules } from "@hooks/Forms/useFormRules";
import { StoreFieldsPayload, StoreFieldsSchema } from "../schemas";
import usePostCreateFields from "@services/Fields/Post/usePostCreateFields";
import { useFieldContext } from "@components/shared/layouts/FormHub/context";

type Props = {
  handleModal: (isShow: boolean) => void;
};

export function useStoreFieldsModal({ handleModal }: Props) {
  const { entityType, viewedField } = useFieldContext();
  const { formMethods, errors, handleSubmit, register } =
    useFormRules<StoreFieldsPayload>({
      schema: StoreFieldsSchema,
      defaultValues: {
        is_required: "NOT",
        is_sensitive: "NOT",
      },
    });
  const { mutateAsync: postFields } = usePostCreateFields();

  const submit = ({
    is_required,
    is_sensitive,
    group,
    ...payload
  }: StoreFieldsPayload) => {
    postFields({
      ...payload,
      relation_id: viewedField.id,
      scope: entityType,
      is_required: is_required == "YES",
      is_sensitive: is_sensitive == "YES",
      group_id: parseInt(group),
    }).then(() => {
      handleModal(false);
      formMethods.reset();
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
