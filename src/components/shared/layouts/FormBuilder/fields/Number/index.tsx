import { When } from "@components/utilities/When";

import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React from "react";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFields } from "../../hooks/useFields";
import { InputProps } from "./type";

export const Number = React.forwardRef<HTMLInputElement, InputProps>(
  function Number(
    {
      isLoading = false,
      className,
      id,
      label,
      placeholder,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const { labelStyledState, handleTransitionLabel } =
      useFieldsAnimation();
    const IdCurrent = id;
    const { error, handleHasError } = useFields({ name: rest.name as string, required });

    return (

      <div
        className={`relative ${!!error ? "border-yellow" : ""
          } w-full my-2`}
      >
        <label
          htmlFor={IdCurrent}
          className={`absolute transition-all duration-350 line-clamp-1`}
          style={{
            ...labelStyledState,
          }}
        >
          {label}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </label>
        <input
          {...rest}
          ref={ref}
          required={required === "true"}
          onFocus={(ev) => {
            handleTransitionLabel(ev);
            handleHasError()
          }}
          onChangeCapture={() => handleHasError()}
          onBlur={handleTransitionLabel}
          type={"number"}
          placeholder={rest.type == "date" ? " " : placeholder}
          className={`h-7 py-1 px-2 ${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <When value={isLoading}>
          <RotateClockwise
            className="absolute right-3 top-4 animate-spin"
            fill="black"
          />
        </When>
        <span className="text-xs text-gray-500"><small>Insira Apenas números</small></span>
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </div>
    );
  }
);
