import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { useCheckbox } from "./hooks/useCheckbox";
import { CheckboxProps } from "./type";
import React from "react";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      type = "checkbox",
      label,
      id,
      dataTestId,
      onChecked,
      ...props
    }: CheckboxProps,
    ref
  ) {
    const { handleChecked } = useCheckbox({
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
              data-testid={IdCurrent}
              defaultChecked={false}
              id={IdCurrent}
              className={`w-[90%] h-[90%] m-[1px] appearance-none rounded-[.2rem] bg-disable cursor-pointer`}
            />
            <label htmlFor={IdCurrent} className="cursor-pointer">
              <SymbolChecked className="absolute left-1 top-[25%]" />
            </label>
          </div>
          <label htmlFor={IdCurrent} className="text-sm ml-2 cursor-pointer">
            {label}
          </label>
        </div>
      </div>
    );
  }
);
