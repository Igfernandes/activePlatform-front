import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCreatePayload, ClientCreateSchema } from "../schemas";

export function useModalForm() {
  const formProps = useFormRules<ClientCreatePayload>({
    schema: ClientCreateSchema,
  });

  return {
    ...formProps,
  };
}
