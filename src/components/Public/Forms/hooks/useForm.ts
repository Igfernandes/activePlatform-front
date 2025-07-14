import { useFormDynamicFields } from "@components/shared/layouts/FormBuilder/hooks/useFormFields";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import usePostSubmitForm from "@services/Forms/Post/usePost";
import { FormsShape } from "@type/Forms";
import { FormEvent, useCallback, useState } from "react";

type Props = {
  form: FormsShape;
  csrf: CSRFShape;
};

export function useForm({ form, csrf }: Props) {
  const { mutateAsync: postSubmitForm, isPending: isLoading } =
    usePostSubmitForm({ slug: form.slug });
  const [components, setComponents] = useState<Array<FieldShape>>(
    JSON.parse(form.components)
  );
  const { fields, handleChange} = useFormDynamicFields()

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

    const formData = new FormData();

    formData.append("form_id", String(form.id));
    Object.entries(fields.current).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file) => formData.append(`${name}[]`, file));
      } else {
        formData.append(`${name}`, value as string | Blob);
      }
    });

    postSubmitForm({ payload: formData, csrf })
      .then(() =>
        setComponents((components) => {
          return components.map((component) => ({
            ...component,
            defaultValue: "",
          }));
        })
      )
      .catch(() => {
        setComponents((components) => {
          return components.map((component) => ({
            ...component,
            defaultValue:
              (fields.current[`input_${component.id}`] as string) ?? "",
          }));
        });
      });
  };
  return {
    handleSubmit,
    isLoading: isLoading,
    handleChange,
    fields,
    components,
  };
}
