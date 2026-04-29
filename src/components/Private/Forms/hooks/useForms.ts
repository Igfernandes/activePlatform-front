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

  const submit = (formsPayload: FormsPayload) => {
    const payload = {
      ...formsPayload,
      components: JSON.stringify(components),
      category: getOnlyNumbers(formsPayload.category),
      service_id:
        formsPayload.service_id?.toString() == "null" ? null : formsPayload,
      status: formsPayload.status as "PUBLISHED" | "DRAFT",
    };

    if (formsPayload.id)
      putForm({
        ...payload,
        id: formsPayload.id,
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
