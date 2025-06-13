import { alterPasswordFormSchema } from "../schemas";
import { PostRecoverPasswordAlterPayload } from "../../../../services/Recovers/Password/Alter/type";
import usePostRecoverPasswordAlter from "../../../../services/Recovers/Password/Alter/usePost";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { useRouter, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();

  const onSubmit = async (payload: PostRecoverPasswordAlterPayload) => {
    const recoverToken = searchParams?.get("recover_token");
    if (!recoverToken) return router.push(publicRoutes.login);

    postRecoverPassword({
      ...payload,
      recover_token: recoverToken as string,
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
