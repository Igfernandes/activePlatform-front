import { When } from "@components/utilities/When";

import React, { useEffect } from "react";

import { InputProps } from "./type";
import { OptionShape } from "../../parts/Modal/tabs/Settings/GroupsTab/type";
import { useFields } from "../../hooks/useFields";
import { useFormContext } from "react-hook-form";

export function Checkboxes(
  {
    className,
    label,
    required,
    options,
    ...rest
  }: InputProps,
) {
  const { setValue } = useFormContext();
  const [parsedOptions, setParsedOptions] = React.useState<OptionShape[]>([]);
  const { error } = useFields({ name: rest.name as string, required });

  useEffect(() => {
    if (options) {
      setParsedOptions(JSON.parse(options));
    }
  }, [options]);

  return (
    <div className="option-list">
      <div>
        <h4 style={rest.style}>
          {label}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </h4>
      </div>
      <div
        className={`flex flex-wrap  box-border ${error?.message ? "border-yellow" : ""
          }`}
      >
        {parsedOptions.map((option, key) => (
          <div
            className="w-full md:w-auto flex flex-row-reverse md:block my-2 cursor-pointer"
            key={`list_${rest.name}_option_${key}_key`}
          >
            <label htmlFor={`${rest.name}_option_${key}`} className="w-[80%] md:w-auto ml-2">
              {option.value}
            </label>
            <input
              {...rest}
              type="checkbox"
              onChange={(ev) => {
                const option = ev.currentTarget
                const container = option.closest(".option-list")

                if (!container) return

                const options = container.querySelectorAll("input")
                const value: string[] = []
                options.forEach((opt) => {
                  if (opt.checked) value.push(opt.value)
                })

                if (setValue) setValue(rest.name ?? "", value.join(", "));
              }}
              value={option.value}
              className={`${className ?? ""} ${!!error ? "border-amber-500 outline-amber-500" : ""
                } w-[10%] min-w-4 md:w-full px-3 pt-8 pb-4  bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
              id={`${rest.name}_option_${key}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};