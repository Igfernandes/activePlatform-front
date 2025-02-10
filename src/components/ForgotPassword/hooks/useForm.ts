import { useForm as useFormReactHook } from "react-hook-form";
import { RecoverPasswordRequestFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostRecoverPasswordRequest from "../../../services/Recovers/Password/Request/usePostRecoverPasswordRequest";
import { PostRecoverPasswordPayload } from "../../../services/Recovers/Password/Request/type";

type Payload = PostRecoverPasswordPayload;

export function useForm() {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(RecoverPasswordRequestFormSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = formMethods;
  const { mutateAsync: postRecoverPasswordRequest } =
    usePostRecoverPasswordRequest();

  const onSubmit = async ({ email }: Payload) => {
    postRecoverPasswordRequest({
      email,
    });
  };

  /**
   * @function hasAllFilledFields
   * - A função irá retornar o status em boolean sobre o preenchimento de todos os campos obrigatórios.
   *
   * @returns {boolean}
   */
  const hasAllFilledFields = (): boolean => {
    if (watch("email")) return true;

    return false;
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
