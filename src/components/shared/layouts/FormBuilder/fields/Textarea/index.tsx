import { When } from "@components/utilities/When";

import React from "react";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

import { FieldProps } from "./type";
import { useFields } from "../../hooks/useFields";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Textarea = React.forwardRef<HTMLTextAreaElement, FieldProps>(
  function Textarea(
    {
      className,
      id,
      label,
      required,
      placeholder,
      ...rest
    }: FieldProps,
    ref
  ) {
    const { labelStyledState, handleTransitionLabel } =
      useFieldsAnimation();
    const IdCurrent = id;
    const { error, handleHasError } = useFields({ name: rest.name as string, required });

    return (
      <>
        <div
          className={`relative ${error?.message ? "border-yellow" : ""
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
          <textarea
            {...rest}
            ref={ref}
            onFocus={(ev) => {
              handleTransitionLabel(ev)
              handleHasError()
            }}
            onBlur={(ev) => {
              handleTransitionLabel(ev)
              handleHasError()
            }}
            placeholder={placeholder}
            className={`${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
              } w-full min-h-20 px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </>
    );
  }
)