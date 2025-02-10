import { Button } from "@components/shared/forms/Button";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "next-i18next";

export function RecoverPasswordForm() {
  const {
    handleSubmit,
    register,
    formMethods,
    hasAllFilledFields,
    isLoading,
    errors,
  } = useForm();
  const { t: tCommon } = useTranslation("common");

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            errors={errors.email}
            {...register("email")}
            dataTestId="email"
            label={"E-mail"}
            placeholder={tCommon("words.enter_email")}
          />
        </div>
        <div className="form-submit mt-6">
          <Button
            text={tCommon("words.send")}
            type="submit"
            isLoading={isLoading}
            disabled={!hasAllFilledFields()}
          />
        </div>
      </form>
    </FormProvider>
  );
}
