import { useFormRules } from "@hooks/Forms/useFormRules";
import { StoreFieldsPayload, StoreFieldsSchema } from "../schemas";
import usePostCreateFields from "@services/Fields/Post/usePost";
import { useFieldContext } from "@components/shared/layouts/FormHub/context/Fields";

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
  const { mutateAsync: postFields, isPending: isLoading } =
    usePostCreateFields();

  const submit = ({
    is_required,
    is_sensitive,
    group,
    component,
    ...payload
  }: StoreFieldsPayload) => {
    postFields({
      ...payload,
      relation_id: viewedField.id,
      scope: entityType,
      is_required: is_required == "YES",
      is_sensitive: is_sensitive == "YES",
      group_id: parseInt(group),
      element: component,
      component,
    }).then(() => {
      const hasContinueRegister = formMethods.watch("hasContinueRegister");
      formMethods.reset();
      formMethods.setValue("hasContinueRegister", hasContinueRegister);

      if (hasContinueRegister === false) handleModal(false);
    });
  };

  return {
    formMethods,
    submit,
    errors,
    handleSubmit,
    register,
    isLoading,
  };
}
