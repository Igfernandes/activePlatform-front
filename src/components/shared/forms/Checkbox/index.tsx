import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { useCheckbox } from "./hooks/useCheckbox";
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
      ...props
    }: CheckboxProps,
    ref
  ) {
    const { handleChecked, isChecked } = useCheckbox();
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
              } w-[.95rem] h-[.9rem] appearance-none rounded-[.2rem] cursor-pointer`}
            />
            <SymbolChecked className="absolute left-1 top-[25%]" />
          </div>
          <label htmlFor={IdCurrent} className="text-sm ml-2">
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
