import { useState } from "react";
import { FormsPayload } from "../schema";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import usePostCreateForm from "../../../../services/CustomForms/Post/usePost";
import usePutForm from "@services/CustomForms/Put/usePut";
import { getOnlyNumbers } from "@helpers/numbers";

export function useForms() {
  const [components, setComponents] = useState<Array<FieldShape>>([]);
  const { mutateAsync: postForm, isPending: isLoadingPost } =
    usePostCreateForm();
  const { mutateAsync: putForm, isPending: isLoadingPut } = usePutForm();

  const submit = (FormsPayload: FormsPayload) => {
    const payload = {
      ...FormsPayload,
      components: JSON.stringify(components),
      category: getOnlyNumbers(FormsPayload.category),
      status: FormsPayload.status as "PUBLISHED" | "DRAFT",
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
    setComponents(fieldsForm);
  };

  return {
    submit,
    handleChangeFormFields,
    components,
    isLoading: isLoadingPost || isLoadingPut,
  };
}
