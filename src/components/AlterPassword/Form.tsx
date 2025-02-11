import { Button } from "@components/shared/forms/Button";
import { useForm } from "./hooks/useForm";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { PasswordValidation } from "@components/shared/forms/PasswordValidation";

export function AlterPasswordForm() {
  const { register, formMethods, hasAllFilledFields, isLoading, onSubmit } =
    useForm();
  const { t: tCommon } = useTranslation("common");

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="form-group my-4">
          <PasswordValidation
            dataTestId="password"
            label={tCommon("words.password")}
            {...register("password")}
          />
        </div>
        <div className="form-submit mt-6">
          <Button
            text={tCommon("words.created_new_password")}
            type="submit"
            isLoading={isLoading}
            disabled={!hasAllFilledFields()}
          />
        </div>
      </form>
    </FormProvider>
  );
}
