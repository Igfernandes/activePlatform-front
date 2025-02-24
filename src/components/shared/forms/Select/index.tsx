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
      multiple,
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
            className={`absolute top-[2px] pt-2 pb-1 left-4 w-[90%] transition-all duration-350 bg-white text-xs`}
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
            } ${
              multiple ? "h-[16vh]" : "h-[4rem]"
            } w-full px-3   pt-7 pb-2 cursor-pointer bg-scroll-transparent bg-white border-secondary border-2 rounded-lg text-primary text-md font-medium`}
            data-testid={dataTestId}
            multiple={multiple}
            id={IdCurrent}
          >
            {options.map(({ text, value }, index) => (
              <option key={index} value={value} className="pb-1 cursor-pointer">
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
