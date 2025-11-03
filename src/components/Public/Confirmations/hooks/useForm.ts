import { ConfirmationFormSchema, ConfirmationsPayload } from "../schemas";
import { useFormRules } from "@hooks/Forms/useFormRules";
import usePostConfirmations from "@services/Confirmation/Post/usePost";
import { useState } from "react";

type ConfirmationsData = {
  link: string;
  title: string;
};

export function useForm() {
  const { formMethods } = useFormRules<ConfirmationsPayload>({
    schema: ConfirmationFormSchema,
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;
  const { mutateAsync: postConfirmation } = usePostConfirmations();
  const [confirmations, setConfirmations] = useState<
    Array<ConfirmationsData> | undefined
  >();

  const onSubmit = async (payload: ConfirmationsPayload) => {
    const { confirmations } = await postConfirmation(payload);

    setConfirmations(confirmations);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    formMethods,
    isLoading: isSubmitting,
    confirmations,
  };
}
