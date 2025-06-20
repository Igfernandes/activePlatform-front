import { useFormContext } from "react-hook-form";
import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { handleMaskCPF } from "@helpers/string";
import { CreateUserPayload } from "../hooks/useSchema";
import dayjs from "dayjs";
import { Date } from "@components/shared/forms/Date";

type Props = {
  handleToggleStageForm: (stageForm: "PERSONAL" | "CREDENTIALS") => void;
};

export function Personal({ handleToggleStageForm }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<CreateUserPayload>();

  return (
    <div>
      <div className="form-group my-6">
        <Input
          {...register("cpf")}
          label={i18n("Words.cpf")}
          dataTestId="name"
          required={true}
          onChange={(ev) => {
            handleMaskCPF(ev);
            setValue("cpf", ev.currentTarget.value);
          }}
          errors={errors.cpf}
        />
      </div>
      <div className="form-group my-6">
        <Date
          {...register("birthdate")}
          label={i18n("Words.birthdate")}
          dataTestId="name"
          required={true}
          max={dayjs().subtract(15, "years").format("YYYY-MM-DD")}
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
