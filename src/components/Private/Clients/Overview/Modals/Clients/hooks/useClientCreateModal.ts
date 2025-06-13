import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCreatePayload, ClientCreateSchema } from "../schemas";
import usePostCreateClient from "../../../../../../../services/Clients/Post/usePost";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useModalContext } from "@contexts/Modal";

dayjs.extend(customParseFormat);

export function useModalForm() {
  const { formMethods, handleSubmit } = useFormRules<ClientCreatePayload>({
    schema: ClientCreateSchema,
  });
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: postCreateClient, isPending } = usePostCreateClient();
  const { watch } = formMethods;

  const submit = ({ birthdate, ...payload }: ClientCreatePayload) => {
    postCreateClient({
      ...payload,
      birthdate: birthdate
        ? dayjs(birthdate, "DD/MM/YYYY").format("YYYY-MM-DD")
        : undefined,
    }).then(() => {
      const isContinueRegister = watch("hasContinueRegister");
      formMethods.reset();
      formMethods.setValue("hasContinueRegister", isContinueRegister);

      if (isContinueRegister == false) handleToggleModal(false);
    });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
  };
}
