import { useState } from "react";
import { FormsPayload } from "../schema";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import usePostCreateForm from "../../../../services/Forms/Post/usePostCreateForm";

export function useForms() {
  const [form, setForm] = useState<Array<FieldShape>>([]);
  const { mutateAsync: postForm, isPending: isLoading } = usePostCreateForm();

  const submit = (FormsPayload: FormsPayload) => {
    postForm({
      ...FormsPayload,
      components: JSON.stringify(form),
      status: "PUBLISHED",
    });
  };

  const handleChangeFormFields = (fieldsForm: Array<FieldShape>) => {
    setForm(fieldsForm);
  };

  return {
    submit,
    handleChangeFormFields,
    form,
    isLoading,
  };
}
