import { alterPasswordFormSchema } from "../schemas";
import { PostRecoverPasswordAlterPayload } from "../../../../services/Recovers/Password/Alter/type";
import usePostRecoverPasswordAlter from "../../../../services/Recovers/Password/Alter/usePostRecoverPasswordAlter";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { useRouter } from "next/router";
import { publicRoutes } from "@configs/routes/Web/navigation";

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
  const router = useRouter();

  const onSubmit = async (payload: PostRecoverPasswordAlterPayload) => {
    if (!router.query?.recover_token) return router.push(publicRoutes.login);

    postRecoverPassword({
      ...payload,
      recover_token: router.query.recover_token as string,
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
