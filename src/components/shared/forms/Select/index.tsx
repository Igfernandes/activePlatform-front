import { When } from "@components/utilities/When";
import { SelectProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      required,
      options = [],
      handledChange,
      ...rest
    }: SelectProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;

    return (
      <>
        <div className="relative">
          <label
            htmlFor={IdCurrent}
            className={`absolute top-[2px] pt-2 pb-1 left-2 w-[95%] transition-all duration-350 bg-white text-xs`}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <select
            {...rest}
            ref={ref}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 h-[16vh] pt-7 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm`}
            data-testid={dataTestId}
            id={IdCurrent}
          >
            {options.map(({ text, value }, index) => (
              <option key={index} value={value} className="pb-1">
                {text}
              </option>
            ))}
          </select>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
