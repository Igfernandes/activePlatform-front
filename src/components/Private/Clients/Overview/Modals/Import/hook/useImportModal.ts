import { useFormRules } from "@hooks/Forms/useFormRules";
import { ImportPayload, ImportSchema } from "../schemas";
import { useEffect, useState } from "react";
import i18n from "@configs/i18n";
import usePostImportClient from "@services/Clients/Import/usePost";
import { ImportModalsProps } from "../type";

export function useImportModal({ onModal }: ImportModalsProps) {
  const { register, formMethods, handleSubmit } = useFormRules<ImportPayload>({
    schema: ImportSchema,
  });
  const { watch } = formMethods;
  const { mutateAsync: postImport } = usePostImportClient();

  const [fileName, setFileName] = useState<string>(""); // estado para armazenar o nome
  const fileList = watch("excel"); // retorna o File | undefined

  // Atualiza o nome sempre que o arquivo mudar
  useEffect(() => {
    if (fileList && fileList.length > 0) {
      setFileName(fileList[0].name); // pega o primeiro arquivo
    } else {
      setFileName(i18n("Texts.text_upload"));
    }
  }, [fileList]);
  const onSubmit = async (payload: ImportPayload) => {
    await postImport(payload);
    setFileName(i18n("Texts.text_upload"));
    onModal(false);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    fileName,
  };
}
