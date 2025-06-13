import { useValidations } from "./hooks/useValidations";
import { statusColors } from "@assets/colors/default";
import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import i18n from "@configs/i18n";

type Props = {
  password: string;
};

export function PasswordConfirm({ password }: Props) {
  const { validationsStatus } = useValidations({
    password,
  });
  const colorStatus =
    validationsStatus == "void" ? "#6a6a6a" : statusColors[validationsStatus];
  const { register } = useFormContext();

  return (
    <div>
      <div className="mt-2 relative">
        <Input
          label={i18n("Words.password_confirmation")}
          {...register("passwordConfirm")}
          type={"text"}
          dataTestId={"password_confirm"}
          id={"password_confirm"}
          className="border-gray-500 outline-gray-500"
          style={{
            outlineColor: colorStatus,
            borderColor: colorStatus,
          }}
        />
        <div
          className={`border-2 absolute h-6 right-3 top-4 rounded-lg`}
          style={{
            borderColor: colorStatus,
          }}
        ></div>
      </div>
      <div className="mt-2">
        <ul className="text-left list-disc px-5">
          <li
            className={`text-xs`}
            style={{
              color: colorStatus,
            }}
          >
            {i18n("Validations.password_need_equal")}
          </li>
        </ul>
      </div>
    </div>
  );
}
