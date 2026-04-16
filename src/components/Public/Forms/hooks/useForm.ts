import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import usePostFiles from "@services/Files/Post/usePost";
import usePostSubmitForm from "@services/Forms/Post/usePost";
import { FormsShape } from "@type/Forms";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";

type Props = {
  form: FormsShape;
  csrf: CSRFShape;
};

export function useForm({ form, csrf }: Props) {
  const { mutateAsync: postSubmitForm, isPending } = usePostSubmitForm({
    slug: form.slug,
  });
  const [isLoading, setIsLoading] = useState(isPending);
  const components = useMemo(
    () => JSON.parse(form.components ?? "[]"),
    [form.components],
  );
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: uploadFiles } = usePostFiles();

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);

  const handleSubmit = async (payload: Record<string, unknown>) => {
    const formData = new FormData();
    setIsLoading(true);
    for await (const [key, value] of Object.entries(payload)) {
      if (value instanceof FileList) {
        await uploadFiles({
          files: Array.from(value),
          packageRef: dayjs().format("YYYMMDDTTHHmmss"),
        }).then(({ files: filesUploaded }) => {
          if (filesUploaded.failed.length > 0)
            return dispatchSnackbar({
              type: "error",
              message: i18n("Validations.invalid_file"),
            });

          if (filesUploaded.success.length > 0)
            formData.append(
              key,
              filesUploaded.success[0] as unknown as string | Blob,
            );
          else
            return dispatchSnackbar({
              type: "error",
              message: i18n("Validations.invalid_file"),
            });
        });
      } else formData.append(key, value as unknown as string | Blob);
    }

    formData.append("form_id", form.id.toString());

    await postSubmitForm({ payload: formData, csrf });
  };
  return {
    handleSubmit,
    isLoading: isLoading,
    components,
  };
}
