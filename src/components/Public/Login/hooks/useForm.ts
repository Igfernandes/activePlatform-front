import { loginFormSchema } from "../schemas";
import { PostAuthPayload } from "../../../../services/Authentications/Auth/type";
import usePostAuth from "../../../../services/Authentications/Auth/usePostAuth";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { CSRFShape } from "@services/Authentications/CSRF/types";

type Payload = PostAuthPayload;

type Props = {
  csrf: CSRFShape;
};

export function useForm({ csrf }: Props) {
  const { mutateAsync: postAuth } = usePostAuth();
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
      csrf,
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
