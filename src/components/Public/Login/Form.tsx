import { Button } from "@components/shared/forms/Button";
import { Checkbox } from "@components/shared/forms/Checkbox";
import { Password } from "@components/shared/forms/Password";
import { publicRoutes } from "@configs/routes/Web/navigation";
import Link from "next/link";
import { useForm } from "./hooks/useForm";
import { Input } from "@components/shared/forms/Input";
import { FormProvider } from "react-hook-form";
import i18n from "@configs/i18n";
import { CSRFShape } from "@services/Authentications/CSRF/types";

type Props = {
  csrf: CSRFShape;
};

export function LoginForm({ csrf }: Props) {
  const {
    handleSubmit,
    register,
    formMethods,
    hasAllFilledFields,
    isLoading,
    errors,
    updateValueRememberMe,
  } = useForm({ csrf });
  const { forgotPassword } = publicRoutes;
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
            label={i18n("Words.password")}
            {...register("password")}
          />
        </div>
        <div className="sm:flex justify-between items-center">
          <div>
            <Checkbox
              errors={errors.rememberMe}
              dataTestId="remember-me"
              {...register("rememberMe")}
              label={i18n("Screens.login.remember_me")}
              onChecked={updateValueRememberMe}
            />
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href={forgotPassword}
              className="text-sm text-red relative top-[-3.5px]"
            >
              <strong>{i18n("Screens.login.forgot_password")}</strong>
            </Link>
          </div>
        </div>
        <div className="form-submit mt-2">
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
