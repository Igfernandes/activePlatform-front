import { When } from "@components/utilities/When";
import { useInput } from "./hooks/useInput";
import { InputProps } from "./type";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      dataTestId,
      isLoading = false,
      className,
      id,
      label,
      errors,
      name,
      placeholder,
      ...rest
    }: InputProps,
    ref
  ) {
    const { labelClassState, handleTransitionLabel, changeLabelClass } =
      useInput();
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();

    useEffect(() => {
      if (watch(`${name}`)) changeLabelClass("UP");
    }, [watch, name, changeLabelClass]);

    useEffect(() => {
      changeLabelClass(placeholder ? "UP" : "DOWN");
    }, [placeholder]);

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
            ref={ref}
            name={name}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            placeholder={placeholder}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
          <When value={isLoading}>
            <RotateClockwise
              className="absolute right-3 top-4 animate-spin"
              fill="black"
            />
          </When>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
