import i18n from "@configs/i18n";
import { PasswordValidation } from "@components/shared/forms/PasswordValidation";
import { Button } from "@components/shared/forms/Button";
import { FieldErrors } from "react-hook-form";
import { CreateUserPayload } from "../hooks/useSchema";

type Props = {
  handleToggleStageForm: (stageForm: "PERSONAL" | "CREDENTIALS") => void;
  isLoading: boolean;
  errors: FieldErrors<CreateUserPayload>;
};

export function Credentials({ handleToggleStageForm, isLoading }: Props) {
  return (
    <div>
      <div className="form-group my-4">
        <PasswordValidation
          dataTestId="password"
          label={i18n("Words.password")}
        />
      </div>
      <div className="button-group flex flex-wrap md:flex-nowrap ">
        <div className="form-prev mt-6 md:mt-0 w-full md:mr-2 md:w-1/2">
          <Button
            className="bg-white border-secondary border-2 text-cross-black-primary"
            onClick={() => handleToggleStageForm("PERSONAL")}
            text={i18n("Words.go_back")}
            type="button"
          />
        </div>
        <div className="form-submit mt-6  md:mt-0 w-full md:w-1/2">
          <Button
            text={i18n("Words.create_account")}
            type="submit"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
