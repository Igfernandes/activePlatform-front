import { When } from "@components/utilities/When";
import { PhoneProps } from "./type";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";
import { handleMaskPhone } from "@helpers/string";
import { useFields } from "../../hooks/useFields";

export const Phone = React.forwardRef<HTMLInputElement, PhoneProps>(
  function Phone(
    {
      className,
      id,
      label,
      required,
      ...rest
    }: PhoneProps,
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
      <>
        <div className={`relative w-full ${error?.message ? "border-yellow" : ""}`}>
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
            type="tel"
            onChangeCapture={(ev: React.ChangeEvent<HTMLInputElement>) => {
              handleMaskPhone(ev)
              handleHasError()
            }}
            onFocus={(ev) => {
              handleTransitionLabel(ev)
              handleHasError()
            }}
            onBlur={handleTransitionLabel}
            className={`${className} ${!!error ? "border-amber-500 outline-amber-500" : ""
              } w-full px-3 pt-7 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={error?.message as string} />
      </>
    );
  }
);
