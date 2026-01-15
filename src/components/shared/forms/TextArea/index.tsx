import { When } from "@components/utilities/When";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";
import { TextAreaProps } from "./type";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      placeholder,
      required,
      defaultValue,
      handledChange,
      ...rest
    }: TextAreaProps,
    ref
  ) {
    const { labelStyledState, handleTransitionLabel, changeLabelClass } =
      useFieldsAnimation();
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();
    const value = watch(name); // obtém o valor atual

    useEffect(() => {
      if (value || defaultValue) {
        changeLabelClass("UP");
      }
    }, [value, changeLabelClass]);

    useEffect(() => {
      changeLabelClass(placeholder ? "UP" : "DOWN");
    }, [placeholder]);

    return (
      <>
        <div className="relative">
          <label
            htmlFor={IdCurrent}
            className={`absolute transition-all duration-350`}
            style={{
              ...labelStyledState,
            }}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <textarea
            {...rest}
            ref={ref}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
