import { useFormRules } from "@hooks/Forms/useFormRules";
import { UserSharedModalSchema, UserSharedPayload } from "../schemas";

export function useSharedModalForm() {
  const formProps = useFormRules<UserSharedPayload>({
    schema: UserSharedModalSchema,
  });

  return {
    ...formProps,
  };
}
