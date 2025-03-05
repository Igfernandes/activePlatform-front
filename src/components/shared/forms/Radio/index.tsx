import { RadioProps } from "./type";
import { When } from "@components/utilities/When";
import React from "react";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
    { type = "radio", label, id, dataTestId, errors, ...props }: RadioProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;

    return (
      <div>
        <div>
          <label
            htmlFor={IdCurrent}
            className="text-sm ml-2 cursor-pointer flex"
          >
            <div className="border-2 border-secondary w-6 h-6 relative rounded-xl cursor-pointer">
              <input
                {...props}
                ref={ref}
                type={type}
                data-testid={IdCurrent}
                id={IdCurrent}
                className={`checked:bg-red w-[90%] h-[90%] m-[1px] rounded-xl appearance-none cursor-pointer`}
              />
            </div>

            <div className="ml-2">
              <span>{label}</span>
            </div>
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
