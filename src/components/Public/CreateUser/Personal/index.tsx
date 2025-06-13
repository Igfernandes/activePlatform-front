import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CreateUserPayload } from "../schemas";
import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";

type Props = {
  register: UseFormRegister<CreateUserPayload>;
  handleToggleStageForm: (stageForm: "PERSONAL" | "CREDENTIALS") => void;
  errors: FieldErrors<CreateUserPayload>;
};

export function Personal({ register, handleToggleStageForm, errors }: Props) {
  return (
    <div>
      <div className="form-group my-6">
        <Input
          {...register("cpf")}
          label={i18n("Words.cpf")}
          dataTestId="name"
          required={true}
          errors={errors.cpf}
        />
      </div>
      <div className="form-group my-6">
        <Input
          {...register("birthdate")}
          label={i18n("Words.birthdate")}
          dataTestId="name"
          required={true}
          type={"date"}
          errors={errors.birthdate}
        />
      </div>

      <div className="form-group my-6">
        <Input
          {...register("keyword")}
          label={i18n("Words.keyword")}
          dataTestId="keyword"
          required={true}
          errors={errors.keyword}
          tooltip="Será utilizado para recuperação de senha"
        />
      </div>

      <div className="form-button mt-4">
        <Button
          onClick={() => handleToggleStageForm("CREDENTIALS")}
          type="button"
          text={i18n("Words.proceed")}
          className="bg-red text-white"
        />
      </div>
    </div>
  );
}
