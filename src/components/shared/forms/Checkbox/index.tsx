import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { CheckboxProps } from "./type";
import { When } from "@components/utilities/When";
import React from "react";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      type = "checkbox",
      label,
      id,
      dataTestId,
      errors,
      defaultValue,
      defaultChecked,
      ...props
    }: CheckboxProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;

    return (
      <div>
        <div className="flex relative">
          <div className="border-2 border-secondary w-6 h-6  rounded-[.25rem] cursor-pointer">
            <input
              {...props}
              ref={ref}
              type={type}
              defaultChecked={defaultChecked}
              defaultValue={defaultValue}
              data-testid={IdCurrent}
              id={IdCurrent}
              className={` w-[90%] h-[90%] m-[1px] checked:bg-red bg-textDisabled  appearance-none rounded-[.2rem] cursor-pointer`}
            />
          </div>
          <label htmlFor={IdCurrent} className="text-sm ml-2 cursor-pointer">
            <SymbolChecked className="absolute left-[.4rem] top-[32%]" />
            {label}
          </label>
        </div>
        <When value={!!errors}>
          <div>
            <span>{errors?.message}</span>
          </div>
        </When>
      </div>
    );
  }
);
