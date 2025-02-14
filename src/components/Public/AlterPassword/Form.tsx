import { Button } from "@components/shared/forms/Button";
import { useForm } from "./hooks/useForm";
import { FormProvider } from "react-hook-form";
import { PasswordValidation } from "@components/shared/forms/PasswordValidation";
import i18n from "@configs/i18n";

export function AlterPasswordForm() {
  const { formMethods, hasAllFilledFields, isLoading, handleSubmit } =
    useForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <PasswordValidation
            dataTestId="password"
            label={i18n("words.password")}
            name="password"
          />
        </div>
        <div className="form-submit mt-6">
          <Button
            text={i18n("words.created_new_password")}
            type="submit"
            isLoading={isLoading}
            disabled={!hasAllFilledFields()}
          />
        </div>
      </form>
    </FormProvider>
  );
}
