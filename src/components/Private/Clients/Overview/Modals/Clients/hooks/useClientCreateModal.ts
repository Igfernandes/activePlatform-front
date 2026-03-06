import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCreatePayload, ClientCreateSchema } from "../schemas";
import usePostCreateClient from "../../../../../../../services/Clients/Post/usePost";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useModalContext } from "@contexts/Modal";
import { useMemo } from "react";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

export function useModalForm() {
  const { t } = useI18n();
  const schema = useMemo(() => ClientCreateSchema(t), [t]);
  const { formMethods, handleSubmit } = useFormRules<ClientCreatePayload>({
    schema,
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
      formMethods.reset({
        category: "",
        name: "",
        birthdate: "",
        email: "",
        phone: "",
        hasContinueRegister: isContinueRegister,
      });

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
