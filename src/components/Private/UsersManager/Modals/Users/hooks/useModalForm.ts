import { useFormRules } from "@hooks/Forms/useFormRules";
import { UsersModalSchema, UsersPayload } from "../schemas";

export function useModalForm() {
  const formProps = useFormRules<UsersPayload>({
    schema: UsersModalSchema,
  });

  return {
    ...formProps,
  };
}
