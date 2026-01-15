import { When } from "@components/utilities/When";

import React, { useEffect } from "react";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

import { InputProps } from "./type";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFields } from "../../hooks/useFields";
import { EmailBI } from "@assets/Icons/black/EmailBI";

export const Email = React.forwardRef<HTMLInputElement, InputProps>(
  function Email(
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
    const { labelStyledState, handleTransitionLabel, changeLabelClass } =
      useFieldsAnimation();
    const IdCurrent = id;
    const { error, handleHasError, value } = useFields({ name: rest.name as string, required });

    useEffect(() => {
      if (!!value)
        changeLabelClass("UP");
    }, [value, changeLabelClass])

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
          required={required}
          onFocus={(ev) => {
            handleTransitionLabel(ev);
            handleHasError(ev.currentTarget.value)
          }}
          onChangeCapture={(ev) => handleHasError(ev.currentTarget.value)}
          onBlur={handleTransitionLabel}
          type={"email"}
          placeholder={rest.type == "date" ? " " : placeholder}
          className={`h-7 py-1 px-2 ${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
          id={IdCurrent}
        />

        <EmailBI
          className="absolute right-3 top-5 w-5 h-5"
          fill="black"
        />
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </div>
    );
  }
);
