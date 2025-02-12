import { useForm as useFormReactHook } from "react-hook-form";
import { createUserFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostCreateUserPayload } from "../../../services/Users/Post/type";
import usePostCreateUser from "../../../services/Users/Post/usePostCreateUser";

type Payload = PostCreateUserPayload;

export function useForm() {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(createUserFormSchema),
    mode: "onSubmit",
  });
  const {
    register,
    watch,
    formState: { isSubmitting },
  } = formMethods;
  const { mutateAsync: postCreateUser } = usePostCreateUser();

  const onSubmit = async (payload: Payload) => {
    postCreateUser(payload);
  };

  /**
   * @function hasAllFilledFields
   * - A função irá retornar o status em boolean sobre o preenchimento de todos os campos obrigatórios.
   *
   * @returns {boolean}
   */
  const hasAllFilledFields = (): boolean => {
    if (watch("password") && watch("name")) return true;

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
