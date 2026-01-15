import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Color = React.forwardRef<HTMLInputElement, InputProps>(
  function Color(
    {
      dataTestId,
      isLoading = false,
      className,
      id,
      label,
      errors,
      name,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;

    return (
      <>
        <div className={`relative ${errors?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}

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
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-1 rounded-md bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
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
