import { Button } from "@components/shared/forms/Button";
import { Checkbox } from "@components/shared/forms/Checkbox";
import { Password } from "@components/shared/forms/Password";
import { userRoutes } from "@configs/routes/Web/navigation";
import Link from "next/link";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "next-i18next";

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formMethods,
    hasAllFilledFields,
    isLoading,
    errors,
    updateValueRememberMe,
  } = useForm();
  const { forgotPassword } = userRoutes;
  const { t: tLogin } = useTranslation("login");
  const { t: tCommon } = useTranslation("common");

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            errors={errors.login}
            {...register("login")}
            dataTestId="login"
            label={"E-mail"}
          />
        </div>
        <div className="form-group my-4">
          <Password
            errors={errors.password}
            dataTestId="password"
            label={"Password"}
            {...register("password")}
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Checkbox
              errors={errors.rememberMe}
              dataTestId="remember-me"
              {...register("rememberMe")}
              label={tLogin("remember_me")}
              onChecked={updateValueRememberMe}
            />
          </div>
          <div>
            <Link
              href={forgotPassword}
              className="text-sm text-red relative top-[-3.5]"
            >
              <strong>{tLogin("forgot_password")}</strong>
            </Link>
          </div>
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
