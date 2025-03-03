import { useFormRules } from "@hooks/Forms/useFormRules";
import { StoreFieldsPayload, StoreFieldsSchema } from "../schemas";

export function useStoreFieldsModal() {
  const formProps = useFormRules<StoreFieldsPayload>({
    schema: StoreFieldsSchema,
  });

  return {
    ...formProps,
  };
}
