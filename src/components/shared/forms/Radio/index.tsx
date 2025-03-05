import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { useCheckbox } from "./hooks/useCheckbox";
import { CheckboxProps } from "./type";
import { When } from "@components/utilities/When";
import React from "react";

export const Radio = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Radio(
    {
      type = "radio",
      label,
      id,
      dataTestId,
      errors,
      onChecked,
      ...props
    }: CheckboxProps,
    ref
  ) {
    const { handleChecked, isChecked } = useCheckbox({
      onChecked,
    });
    const IdCurrent = id ?? dataTestId;

    return (
      <div>
        <div className="flex">
          <div
            className="border-2 border-secondary w-6 h-6 relative rounded-[.25rem] cursor-pointer"
            onClick={handleChecked}
          >
            <input
              {...props}
              ref={ref}
              type={type}
              defaultChecked={isChecked}
              data-testid={IdCurrent}
              id={IdCurrent}
              className={`${
                isChecked ? "bg-red" : "bg-textDisabled"
              } w-[90%] h-[90%] m-[1px] appearance-none rounded-[.2rem] cursor-pointer`}
            />
            <SymbolChecked className="absolute left-1 top-[25%]" />
          </div>
          <label htmlFor={IdCurrent} className="text-sm ml-2 cursor-pointer">
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
