import { CSRFShape } from "@services/Authentications/CSRF/types";
import usePostSubmitForm from "@services/Forms/Post/usePost";
import { FormsShape } from "@type/Forms";
import { useMemo } from "react";

type Props = {
  form: FormsShape;
  csrf: CSRFShape;
};

export function useForm({ form, csrf }: Props) {
  const { mutateAsync: postSubmitForm, isPending: isLoading } =
    usePostSubmitForm({ slug: form.slug });
  const components = useMemo(
    () => JSON.parse(form.components ?? "[]"),
    [form.components]
  );

  const handleSubmit = async (payload: Record<string, unknown>) => {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as unknown as string | Blob);
    });
    formData.append("form_id", form.id.toString());

    await postSubmitForm({ payload: formData, csrf });
  };
  return {
    handleSubmit,
    isLoading: isLoading,
    components,
  };
}
