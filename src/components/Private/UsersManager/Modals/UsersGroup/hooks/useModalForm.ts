import { useFormRules } from "@hooks/Forms/useFormRules";
import { GroupModalSchema, UsersGroupPayload } from "../schemas";

export function useModalForm() {
  const formProps = useFormRules<UsersGroupPayload>({
    schema: GroupModalSchema,
    defaultValues: {
      permissions: [],
    },
  });

  return {
    ...formProps,
  };
}
