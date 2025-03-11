import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCategoryModalSchema, ClientCategoryPayload } from "../schemas";

export function useClientCategoriesModal() {
  const formProps = useFormRules<ClientCategoryPayload>({
    schema: ClientCategoryModalSchema,
  });

  return {
    ...formProps,
  };
}
