import usePostCreateUsers from "@services/Users/Post/usePostCreateUsers";
import { createUserFormSchema, CreateUserPayload } from "../schemas";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

type Payload = CreateUserPayload;

export function useForm() {
  const [stageForm, setStageForm] = useState<"PERSONAL" | "CREDENTIALS">(
    "PERSONAL"
  );
  const { formMethods, errors } = useFormRules<Payload>({
    schema: createUserFormSchema,
  });
  const { register, handleSubmit, trigger } = formMethods;
  const { mutateAsync: postCreateUsers, isPending: isLoading } =
    usePostCreateUsers();

  const onSubmit = async (payload: CreateUserPayload) => {
    postCreateUsers({ ...payload });
  };

  const handleToggleStageForm = async (
    stageForm: "PERSONAL" | "CREDENTIALS"
  ) => {
    const isValid = await trigger(["keyword", "birthdate", "cpf"]);

    if (isValid) setStageForm(stageForm);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    formMethods,
    errors,
    isLoading,
    stageForm,
    handleToggleStageForm,
  };
}
