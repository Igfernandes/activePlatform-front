import { When } from "@components/utilities/When";
import { PhoneProps } from "./type";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";
import { useInput } from "./hooks/useInput";
import { handleMaskPhone } from "@helpers/string";

export const Phone = React.forwardRef<HTMLInputElement, PhoneProps>(
  function Phone(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      placeholder,
      defaultValue,
      required,
      ...rest
    }: PhoneProps,
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
            type="tel"
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              handleMaskPhone(ev);
            }}
            defaultValue={defaultValue}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            placeholder={rest.type == "date" ? " " : placeholder}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
