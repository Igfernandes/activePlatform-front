import { When } from "@components/utilities/When";

import React from "react";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

import { InputProps } from "./type";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFields } from "../../hooks/useFields";
import { handleMaskCEP } from "@helpers/string";

export const CEP = React.forwardRef<HTMLInputElement, InputProps>(
  function CEP(
    {
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
          onChangeCapture={(ev: React.ChangeEvent<HTMLInputElement>) => {
            handleMaskCEP(ev);
            handleHasError()
          }}
          onBlur={handleTransitionLabel}
          type={"text"}
          placeholder={rest.type == "date" ? " " : placeholder}
          className={`h-7 py-1 px-2 ${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </div>
    );
  }
);
