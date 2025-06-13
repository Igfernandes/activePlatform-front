import { useState } from "react";
import { FormsPayload } from "../schema";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import usePostCreateForm from "../../../../services/CustomForms/Post/usePost";
import usePutForm from "@services/CustomForms/Put/usePut";

export function useForms() {
  const [form, setForm] = useState<Array<FieldShape>>([]);
  const { mutateAsync: postForm, isPending: isLoadingPost } =
    usePostCreateForm();
  const { mutateAsync: putForm, isPending: isLoadingPut } = usePutForm();

  const submit = (FormsPayload: FormsPayload) => {
    const payload = {
      ...FormsPayload,
      components: JSON.stringify(form),
      status: "PUBLISHED" as "PUBLISHED" | "DRAFT",
    };

    if (FormsPayload.id)
      putForm({
        ...payload,
        id: FormsPayload.id,
      });
    else {
      postForm(payload);
    }
  };

  const handleChangeFormFields = (fieldsForm: Array<FieldShape>) => {
    setForm(fieldsForm);
  };

  return {
    submit,
    handleChangeFormFields,
    form,
    isLoading: isLoadingPost || isLoadingPut,
  };
}
