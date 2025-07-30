import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Date = React.forwardRef<HTMLInputElement, InputProps>(
  function Date(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      placeholder,
      required,
      handledChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;

    return (
      <>
        <div className={`relative ${errors?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}
            className={`absolute top-2 left-4 text-[.75rem] transition-all duration-350 line-clamp-1`}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input
            {...rest}
            ref={ref}
            type={"date"}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            placeholder={rest.type == "date" ? " " : placeholder}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
