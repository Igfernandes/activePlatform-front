import { usePasswordConfirm } from "./hooks/usePasswordConfirm";
import { useTranslation } from "next-i18next";
import { useValidations } from "./hooks/useValidations";
import { statusColors } from "@assets/colors/default";
import { useFormContext } from "react-hook-form";

type Props = {
  password: string;
};

export function PasswordConfirm({ password }: Props) {
  const { validationsStatus } = useValidations({
    password,
  });
  const { labelClassState, handleTransitionLabel } = usePasswordConfirm();
  const { t } = useTranslation("common");
  const colorStatus =
    validationsStatus == "void" ? "#6a6a6a" : statusColors[validationsStatus];
  const { register } = useFormContext();

  return (
    <div>
      <div className="mt-2 relative">
        <label
          htmlFor={"password_confirm"}
          className={`absolute transition-all duration-350 ${labelClassState}`}
        >
          {t("words.password_confirmation")}
        </label>
        <input
          {...register("passwordConfirm")}
          onFocus={handleTransitionLabel}
          onBlur={handleTransitionLabel}
          className={`border-gray-500 outline-gray-500
          } w-full h-12 px-3 pb-4 pt-8 bg-white border-secondary border-2 rounded-lg text-textPrimary`}
          data-testid={"password_confirm"}
          id={"password_confirm"}
          type={"text"}
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
            {t("texts.password_need_equal")}
          </li>
        </ul>
      </div>
    </div>
  );
}
