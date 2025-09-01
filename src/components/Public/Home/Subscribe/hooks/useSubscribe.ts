import { useFormRules } from "@hooks/Forms/useFormRules";
import { SubscribePayload, SubscribeSchema } from "../schemas";
import usePostSubscribeClient from "@services/Clients/Subscribe/usePost";

export function useSubscribe() {
  const { formMethods, handleSubmit, register } = useFormRules<SubscribePayload>({
    schema: SubscribeSchema,
  });
  const { mutateAsync: subscribe, isPending: isLoading } =
    usePostSubscribeClient();

  const onSubmit = (payload: SubscribePayload) => {
    subscribe(payload);
  };

  return {
    formMethods,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
  };
}
