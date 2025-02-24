import { useFormRules } from "@hooks/Forms/useFormRules";
import { UserCategoryModalSchema, UserCategoryPayload } from "../schemas";

export function useUserCategoriesModal() {
  const formProps = useFormRules<UserCategoryPayload>({
    schema: UserCategoryModalSchema,
  });

  return {
    ...formProps,
  };
}
