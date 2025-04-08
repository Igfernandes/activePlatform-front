import { useFormRules } from "@hooks/Forms/useFormRules";
import { CategoryModalSchema, CategoryPayload } from "../schemas";
import usePostCategories from "../../../../../../../services/Clients/Categories/Post/usePostCategories";
import { ModalClientsOperationType } from "@components/Private/Clients/type";
import { useModalContext } from "@contexts/Modal";

export function useModalForm() {
  const { formMethods } = useFormRules<CategoryPayload>({
    schema: CategoryModalSchema,
  });
  const { handleToggleModal } = useModalContext<ModalClientsOperationType>();

  const { handleSubmit } = formMethods;
  const { mutateAsync: postCategory, isPending: isLoading } =
    usePostCategories();

  const submit = (payload: CategoryPayload) => {
    const categories = payload.categories.map((category) => ({
      name: category,
    }));
    postCategory({ categories }).then(() => handleToggleModal(false));
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading,
  };
}
