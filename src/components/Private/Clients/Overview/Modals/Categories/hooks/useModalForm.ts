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

  const submit = ({ categories }: CategoryPayload) => {
    const categoriesData = categories.map((category) => ({
      id: category.id,
      name: category.value,
    }));
    postCategory({ categories: categoriesData })
      .catch(() => {})
      .then((response) => {
        if (!response) {
        } else {
          handleToggleModal(false);
        }
      });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading,
  };
}
