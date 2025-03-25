import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCreatePayload, ClientCreateSchema } from "../schemas";
import usePostCreateClient from "../../../../../../services/Clients/Post/usePostCreateClient";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { useModalContext } from "@contexts/Modal";

dayjs.extend(customParseFormat);

export function useModalForm() {
  const { formMethods, handleSubmit } = useFormRules<ClientCreatePayload>({
    schema: ClientCreateSchema,
  });
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: postCreateClient, isPending } = usePostCreateClient();
  const [shouldContinueRegistering, setShouldContinueRegistering] =
    useState<boolean>(false);

  const submit = ({ birthdate, ...payload }: ClientCreatePayload) => {
    postCreateClient({
      ...payload,
      birthdate: birthdate
        ? dayjs(birthdate, "DD/MM/YYYY").format("YYYY-MM-DD")
        : undefined,
    }).then(() => {
      formMethods.reset();

      if (shouldContinueRegistering == false) handleToggleModal(false);
    });
  };

  const handleToggleContinueRegistering = () => {
    setShouldContinueRegistering(!shouldContinueRegistering);
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    shouldContinueRegistering,
    handleToggleContinueRegistering,
  };
}
