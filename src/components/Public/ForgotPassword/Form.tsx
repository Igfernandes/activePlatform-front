import { Button } from "@components/shared/forms/Button";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";

export function RecoverPasswordForm() {
  const {
    handleSubmit,
    register,
    formMethods,
    hasAllFilledFields,
    isLoading,
    errors,
  } = useForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            errors={errors.email}
            {...register("email")}
            dataTestId="email"
            label={"E-mail"}
            placeholder={i18n("Texts.enter_email")}
          />
        </div>
        <div className="form-submit mt-6">
          <Button
            text={i18n("Words.send")}
            type="submit"
            isLoading={isLoading}
            disabled={!hasAllFilledFields()}
          />
        </div>
      </form>
    </FormProvider>
  );
}
