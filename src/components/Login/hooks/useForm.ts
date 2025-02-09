import { useForm as useFormReactHook } from "react-hook-form";
import { loginFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostAuthPayload } from "../../../services/Authentications/Auth/type";
import usePostAuth from "../../../services/Authentications/Auth/usePostAuth";

type Payload = PostAuthPayload;

export function useForm() {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(loginFormSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = formMethods;
  const { mutateAsync: postAuth } = usePostAuth();

  const onSubmit = async ({ login, password, rememberMe }: PostAuthPayload) => {
    postAuth({
      login,
      password,
      rememberMe,
    });
  };

  const hasAllFilledFields = (): boolean => {
    if (watch("login") && watch("password")) return true;

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
