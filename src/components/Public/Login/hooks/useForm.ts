import { loginFormSchema } from "../schemas";
import { PostAuthPayload } from "../../../../services/Authentications/Auth/type";
import usePostAuth from "../../../../services/Authentications/Auth/usePostAuth";
import { useRecaptcha } from "@hooks/useRecaptcha";
import { useFormRules } from "@hooks/Forms/useFormRules";

type Payload = PostAuthPayload;

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export function useForm() {
  const { mutateAsync: postAuth } = usePostAuth();
  const { token } = useRecaptcha(RECAPTCHA_KEY ?? "", "login");
  const { formMethods, hasAllFilledFields } = useFormRules<Payload>({
    schema: loginFormSchema,
    exclude: ["rememberMe"],
  });
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = formMethods;

  const onSubmit = async ({ login, password, rememberMe }: PostAuthPayload) => {
    postAuth({
      login,
      password,
      rememberMe,
      "g-recaptcha-response": token,
    });
  };

  /**
   * @function updateValueRememberMe
   * - A função é responsável por atualizar o valor no campo "rememberMe" com base na alteração de valores referentes ao
   * botão do tipo checkbox.
   *
   * @param {boolean} isChecked
   */
  const updateValueRememberMe = (isChecked: boolean) => {
    setValue("rememberMe", isChecked);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
    updateValueRememberMe,
  };
}
