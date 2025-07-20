import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { CheckboxProps } from "./type";
import React, { useState } from "react";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { type = "checkbox", label, id, dataTestId, ...props }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    const IdCurrent = id ?? dataTestId;
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
      <div className="inline-block min-w-48">
        <div className="flex">
          <div
            onClick={() => setIsChecked((isChecked) => !isChecked)}
            className="border-2 border-secondary w-6 h-6 relative rounded-[.25rem] cursor-pointer mr-2"
          >
            <input
              {...props}
              ref={ref}
              type={type}
              data-testid={IdCurrent}
              id={IdCurrent}
              checked={isChecked}
              className={`w-[90%] h-[90%] m-[1px] appearance-none rounded-[.2rem] checked:bg-red bg-disable cursor-pointer`}
            />
            <SymbolChecked className="absolute left-1 top-[25%]" />
          </div>
          <label
            htmlFor={IdCurrent}
            className="flex text-sm ml-2 cursor-pointer"
          >
            <span> {label}</span>
          </label>
        </div>
      </div>
    );
  }
);
