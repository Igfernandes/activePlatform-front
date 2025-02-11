import React, { useEffect } from "react";
import { PasswordProps } from "./type";
import { usePassword } from "./hooks/usePassword";
import { useFormContext } from "react-hook-form";
import { useValidations } from "./hooks/useValidations";
import { ValidationList } from "./ValidationList";
import { PasswordConfirm } from "./PaswordConfirm";
import { borderColors, statusColors } from "@assets/colors/default";

export const PasswordValidation = React.forwardRef<
  HTMLInputElement,
  PasswordProps
>(function PasswordValidation(
  { dataTestId, className = "", id, label, ...rest }: PasswordProps,
  ref
) {
  const { watch } = useFormContext();
  const IdCurrent = id ?? dataTestId;
  const { labelClassState, handleTransitionLabel, changeLabelClass } =
    usePassword();
  const { criteriaStatus, handleChangeValidationsStatus, validationsStatus } =
    useValidations({
      password: watch(`password`),
    });
  const ColorStatus =
    validationsStatus == "void"
      ? borderColors.secondary
      : statusColors[validationsStatus];

  useEffect(() => {
    if (watch(`password`)) changeLabelClass("UP");

    handleChangeValidationsStatus();
  }, [watch, changeLabelClass]);

  return (
    <>
      <div className="relative">
        <label
          htmlFor={IdCurrent}
          className={`absolute transition-all duration-350 ${labelClassState}`}
        >
          {label}
        </label>
        <input
          {...rest}
          onFocus={handleTransitionLabel}
          onBlur={handleTransitionLabel}
          ref={ref}
          name={"password"}
          className={`${className} 
          } w-full h-12 px-3 pb-4 pt-8 bg-white border-secondary border-2 rounded-lg text-textPrimary`}
          data-testid={dataTestId}
          id={IdCurrent}
          type={"text"}
          style={{
            outlineColor: ColorStatus,
            borderColor: ColorStatus,
          }}
        />
        <div
          className={`border-2 absolute h-6 right-3 top-4 rounded-lg`}
          style={{
            borderColor: ColorStatus,
          }}
        ></div>
      </div>
      <ValidationList {...criteriaStatus} />
      <PasswordConfirm password={watch(`password`)} />
    </>
  );
});
