import { CSRFShape } from "@services/Authentications/CSRF/types";
import usePostSubmitForm from "@services/Forms/Post/usePost";
import { FormsShape } from "@type/Forms";
import { FormEvent, useCallback, useRef } from "react";

type Props = {
  form: FormsShape;
  csrf: CSRFShape;
};

export function useForm({ form, csrf }: Props) {
  const { mutateAsync: postSubmitForm, isPending: isLoading } =
    usePostSubmitForm();
  const fields = useRef<Record<string, unknown>>({});

  const handleChangeField = (name: string, value: unknown) => {
    const updateFields = {
      ...fields.current,
      [name]: value,
    };

    fields.current = updateFields;
  };

  const handleValidFields = useCallback((form: HTMLFormElement) => {
    const fields = Array.from(form.querySelectorAll("[name]")).filter(
      (el): el is HTMLInputElement | HTMLSelectElement =>
        el instanceof HTMLInputElement || el instanceof HTMLSelectElement
    );

    let isValidForm = true;

    fields.forEach((field) => {
      if (field.required && !field.value) {
        field.classList.add("is_invalid");
        isValidForm = false;
      }
    });

    return isValidForm;
  }, []);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formElement = ev.currentTarget as HTMLFormElement;

    if (!handleValidFields(formElement)) return;

    const formData = new FormData(formElement);

    formData.append("form_id", String(form.id));
    Object.entries(fields.current).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file) => formData.append(`${name}[]`, file));
      } else {
        formData.append(`${name}`, value as string | Blob);
      }
    });

    postSubmitForm({ payload: formData, csrf });
  };
  return {
    handleSubmit,
    isLoading: isLoading,
    handleChangeField,
  };
}
