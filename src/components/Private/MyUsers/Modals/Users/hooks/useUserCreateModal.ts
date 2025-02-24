import { useFormRules } from "@hooks/Forms/useFormRules";
import { UserCreatePayload, UserCreateSchema } from "../schemas";

export function useModalForm() {
  const formProps = useFormRules<UserCreatePayload>({
    schema: UserCreateSchema,
  });

  return {
    ...formProps,
  };
}
