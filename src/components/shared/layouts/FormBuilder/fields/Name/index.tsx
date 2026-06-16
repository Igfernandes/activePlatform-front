import { When } from "@components/utilities/When";

import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React, { useEffect } from "react";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

import { InputProps } from "./type";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFields } from "../../hooks/useFields";
import { useFormContext } from "react-hook-form";
import { capitalize } from "@helpers/string";

export const Name = React.forwardRef<HTMLInputElement, InputProps>(
  function Name(
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
    const name = `${rest.name}`
    const IdCurrent = id;
    const { error, handleHasError } = useFields({ name: name as string, required });
    const { watch, setValue } = useFormContext()
    const nameValue = watch(name)

    useEffect(() => {
      setValue(name, capitalize(nameValue ??  ""))
    }, [name, setValue, nameValue])

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
            handleHasError(ev.currentTarget.value)
          }}
          onChangeCapture={() => handleHasError()}
          onBlur={handleTransitionLabel}
          type={rest.type}
          placeholder={rest.type == "date" ? " " : placeholder}
          className={`h-7 py-1 px-2 ${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <When value={isLoading}>
          <RotateClockwise
            className="absolute right-3 top-4 animate-spin"
            fill="black"
          />
        </When>
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </div>
    );
  }
);
