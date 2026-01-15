import { InputProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      dataTestId,
      className,
      id,
      errors,
      name,
      placeholder,
      handledChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;

    return (
      <>
        <div className="relative my-2">
          <input
            {...rest}
            ref={ref}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            placeholder={placeholder}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-2 py-1 bg-white border-secondary border-2 rounded-lg text-rose-500 text-md`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
