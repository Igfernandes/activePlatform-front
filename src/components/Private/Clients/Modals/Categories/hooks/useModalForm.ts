import { useFormRules } from "@hooks/Forms/useFormRules";
import { CategoryModalSchema, CategoryPayload } from "../schemas";
import usePostCategories from "../../../../../../services/Clients/Categories/Post/usePostCategories";

export function useModalForm() {
  const { formMethods } = useFormRules<CategoryPayload>({
    schema: CategoryModalSchema,
  });

  const { handleSubmit } = formMethods;
  const { mutateAsync: postCategory } = usePostCategories();

  const submit = (payload: CategoryPayload) => {
    const categories = payload.categories.map((category) => ({
      name: category,
    }));
    postCategory({ categories });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
  };
}
