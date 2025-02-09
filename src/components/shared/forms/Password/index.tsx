import { When } from "@components/utilities/When";
import Image from "next/image";
import React, { useEffect } from "react";
import { EyeOpened } from "@assets/Icons/black/EyeOpened";
import { EyeClosed } from "@assets/Icons/black/EyeClosed";
import { PasswordProps } from "./type";
import { usePassword } from "./hooks/usePassword";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  function Password(
    {
      dataTestId,
      isLoading = false,
      className,
      id,
      label,
      errors,
      name,
      ...rest
    }: PasswordProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const {
      labelClassState,
      handleTransitionLabel,
      handleToggleTypeInput,
      changeLabelClass,
      isShowPassword,
    } = usePassword();
    const { watch } = useFormContext();

    useEffect(() => {
      if (watch(`${name}`)) changeLabelClass("UP");
    }, [watch, name, changeLabelClass]);

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
            name={name}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full h-12 px-3 pb-4 pt-8 bg-white border-secondary border-2 rounded-lg text-textPrimary`}
            data-testid={dataTestId}
            id={IdCurrent}
            type={isShowPassword ? "text" : "password"}
          />
          <div
            className="eye absolute right-4 top-4 cursor-pointer"
            onClick={handleToggleTypeInput}
          >
            <When value={!isShowPassword}>
              <EyeClosed />
            </When>
            <When value={isShowPassword}>
              <EyeOpened />
            </When>
          </div>
          <When value={isLoading}>
            <Image
              className="loading absolute w-[2rem] right-2 top-2"
              alt=""
              src=""
            />
          </When>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
