import { alterPasswordFormSchema } from "../schemas";
import { PostRecoverPasswordAlterPayload } from "../../../services/Recovers/Password/Alter/type";
import usePostRecoverPasswordAlter from "../../../services/Recovers/Password/Alter/usePostRecoverPasswordAlter";
import { useFormRules } from "@hooks/Forms/useFormRules";

type Payload = PostRecoverPasswordAlterPayload;

export function useForm() {
  const { formMethods, hasAllFilledFields } = useFormRules<Payload>({
    schema: alterPasswordFormSchema,
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;
  const { mutateAsync: postRecoverPassword } = usePostRecoverPasswordAlter();

  const onSubmit = async (payload: PostRecoverPasswordAlterPayload) => {
    postRecoverPassword(payload);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
