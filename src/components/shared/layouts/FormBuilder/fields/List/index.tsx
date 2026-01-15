import { When } from "@components/utilities/When";

import React, { useMemo } from "react";

import { InputProps } from "./type";
import { OptionShape } from "../../parts/Modal/tabs/Settings/GroupsTab/type";
import { useFields } from "../../hooks/useFields";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const List = React.forwardRef<HTMLInputElement, InputProps>(
  function List(
    {

      options,
      className,
      label,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const optionsRef = useMemo<Array<OptionShape>>(
      () => JSON.parse(options ?? "[]") as Array<OptionShape>,
      [options]
    );
    const { error } = useFields({ name: rest.name as string, required });

    return (
      <div>
        <div>
          <h4 style={rest.style}>
            {label}
            <When value={!!required}>
              <span className="text-red">*</span>
            </When>
          </h4>
        </div>
        <div
          className={`flex flex-wrap box-border ${error?.message ? "border-yellow" : ""
            } `}
        >
          {optionsRef.map((option, key) => (
            <div
              className="w-full md:w-auto flex flex-row-reverse md:block my-2 cursor-pointer"
              key={`list_${rest.name}_option_${key}_key`}
            >
              <label htmlFor={`${rest.name}_option_${key}`} className="w-[80%] md:w-auto ml-2">
                {option.value}
              </label>
              <input
                {...rest}
                ref={ref}
                type="radio"
                id={`${rest.name}_option_${key}`}
                required={required === "true"}
                value={option.value}
                className={`${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
                  } w-[10%] min-w-4 md:w-full px-3 pt-8 pb-4  bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
              />
            </div>
          ))}
        </div>
        <ErrorMessage errors={!!error ? error?.message as string : undefined} />
      </div>
    );
  }
)