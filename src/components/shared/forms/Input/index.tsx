import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";
import { useInput } from "./hooks/useInput";

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
      defaultValue,
      required,
      handleChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const { labelStyledState, handleTransitionLabel, changeLabelClass } =
      useFieldsAnimation();
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();
    const { isUpLabel } = useInput();
    const value = watch(name); // obtém o valor atual

    useEffect(() => {
      if (value || defaultValue) {
        changeLabelClass("UP");
      }
    }, [value, changeLabelClass]);

    useEffect(() => {
      changeLabelClass(isUpLabel({ placeholder, ...rest }) ? "UP" : "DOWN");
    }, [placeholder]);

    return (
      <>
        <div className={`relative ${errors?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}
            className={`absolute text-x md:text-base transition-all duration-350 line-clamp-1`}
            style={labelStyledState}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input
            {...rest}
            ref={ref}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handleChange) handleChange(ev);
            }}
            defaultValue={defaultValue}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            placeholder={rest.type == "date" ? " " : placeholder}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
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
