import React from "react";
import { PasswordProps } from "./type";
import { useFormContext } from "react-hook-form";
import { useValidations } from "./hooks/useValidations";
import { ValidationList } from "./ValidationList";
import { PasswordConfirm } from "./PaswordConfirm";
import { borderColors, statusColors } from "@assets/colors/default";
import { Input } from "../Input";

export function PasswordValidation({
  name = "password",
  label,
  ...rest
}: PasswordProps) {
  const { register, watch } = useFormContext();
  const { criteriaStatus, validationsStatus, handleChangeValidationsStatus } =
    useValidations();
  const ColorStatus =
    validationsStatus == "void"
      ? borderColors.secondary
      : statusColors[validationsStatus];

  return (
    <>
      <div className="relative">
        <Input
          {...rest}
          {...register(name)}
          type={"text"}
          dataTestId={name}
          label={label}
          handledChange={handleChangeValidationsStatus}
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
}
