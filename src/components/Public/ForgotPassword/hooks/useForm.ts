import usePostRecoverPasswordRequest from "../../../../services/Recovers/Password/Request/usePost";
import { PostRecoverPasswordPayload } from "../../../../services/Recovers/Password/Request/type";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { useRecoverPasswordRequestSchema } from "./useSchema";

type Payload = PostRecoverPasswordPayload;

export function useForm() {
  const { schema } = useRecoverPasswordRequestSchema();
  const { formMethods, hasAllFilledFields } = useFormRules<Payload>({
    schema,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const { mutateAsync: postRecoverPasswordRequest, isPending: isLoading } =
    usePostRecoverPasswordRequest();

  const onSubmit = async ({ email }: Payload) => {
    postRecoverPasswordRequest({
      email,
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    hasAllFilledFields,
    isLoading,
  };
}
