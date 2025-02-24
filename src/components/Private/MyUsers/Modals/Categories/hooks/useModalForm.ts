import { useFormRules } from "@hooks/Forms/useFormRules";
import { CategoryModalSchema, CategoryPayload } from "../schemas";

export function useModalForm() {
  const formProps = useFormRules<CategoryPayload>({
    schema: CategoryModalSchema,
  });

  return {
    ...formProps,
  };
}
