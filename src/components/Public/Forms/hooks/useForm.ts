import { useRecaptcha } from "@hooks/useRecaptcha";
import usePostSubmitForm from "@services/Forms/Post/usePost";
import { FormsShape } from "@type/Forms";
import { FormEvent, useCallback } from "react";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

type Props = {
  form: FormsShape;
};

export function useForm({ form }: Props) {
  const { token, handleLoaded } = useRecaptcha(RECAPTCHA_KEY ?? "", "login");
  const { mutateAsync: postSubmitForm, isPending: isLoading } =
    usePostSubmitForm();

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

    formData.append("g-recaptcha-response", token);
    formData.append("form_id", String(form.id));
    await handleLoaded().then(() => postSubmitForm(formData));
  };
  return {
    handleSubmit,
    isLoading,
  };
}
