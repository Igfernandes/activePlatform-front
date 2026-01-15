import { When } from "@components/utilities/When";
import React from "react";
import { InputProps } from "./type";
import { useFields } from "../../hooks/useFields";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Color = React.forwardRef<HTMLInputElement, InputProps>(
  function Color(
    {
      className,
      id,
      label,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id;
    const { error, handleHasError } = useFields({ name: rest.name as string, required });

    return (
      <>
        <div
          className={`relative ${error?.message ? "border-yellow" : ""
            } w-full my-2`}
        >
          <label
            htmlFor={IdCurrent}
            className={"pl-1 capitalize font-semibold"}
          >
            {label}
            <When value={!!required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input
            {...rest}
            ref={ref}
            required={required}
            type={"color"}
            onChangeCapture={() => handleHasError()}
            onFocus={() => handleHasError()}
            className={`${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
              } block w-full h-12 p-[2px] bg-white border-secondary border-[1px] rounded-lg text-rose-500 text-sm disabled:bg-disable`}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </>
    );
  }
)