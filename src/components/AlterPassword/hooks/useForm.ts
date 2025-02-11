import { useForm as useFormReactHook } from "react-hook-form";
import { alterPasswordFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostRecoverPasswordAlterPayload } from "../../../services/Recovers/Password/Alter/type";
import usePostRecoverPasswordAlter from "../../../services/Recovers/Password/Alter/usePostRecoverPasswordAlter";

type Payload = PostRecoverPasswordAlterPayload;

export function useForm() {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(alterPasswordFormSchema),
    mode: "onSubmit",
  });
  const {
    register,
    watch,
    formState: { isSubmitting },
  } = formMethods;
  const { mutateAsync: postRecoverPassword } = usePostRecoverPasswordAlter();

  const onSubmit = async (payload: PostRecoverPasswordAlterPayload) => {
    postRecoverPassword(payload);
  };

  /**
   * @function hasAllFilledFields
   * - A função irá retornar o status em boolean sobre o preenchimento de todos os campos obrigatórios.
   *
   * @returns {boolean}
   */
  const hasAllFilledFields = (): boolean => {
    if (watch("password")) return true;

    return false;
  };

  return {
    register,
    onSubmit,
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
