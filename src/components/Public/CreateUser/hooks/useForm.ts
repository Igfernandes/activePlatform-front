import { createUserFormSchema } from "../schemas";
import { PostCreateUserPayload } from "../../../../services/Invites/Post/Users/type";
import usePostCreateUser from "../../../../services/Invites/Post/Users/usePostCreateUser";
import { useFormRules } from "@hooks/Forms/useFormRules";

type Payload = PostCreateUserPayload;

export function useForm() {
  const { formMethods, hasAllFilledFields } = useFormRules<Payload>({
    schema: createUserFormSchema,
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;
  const { mutateAsync: postCreateUser } = usePostCreateUser();

  const onSubmit = async (payload: Payload) => {
    postCreateUser(payload);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    formMethods,
    hasAllFilledFields,
    isLoading: isSubmitting,
  };
}
