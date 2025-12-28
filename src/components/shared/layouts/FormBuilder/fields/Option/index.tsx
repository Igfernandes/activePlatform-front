import { When } from "@components/utilities/When";

import React, { useEffect } from "react";

import { InputProps } from "./type";
import { OptionShape } from "../../parts/Modal/tabs/Settings/GroupsTab/type";

export function Option({
  className,
  errors,
  name,
  required,
  options,
  label,
  setValue,
  ...rest
}: InputProps) {
  const [parsedOptions, setParsedOptions] = React.useState<OptionShape[]>([]);

  useEffect(() => {
    if (options) {
      setParsedOptions(JSON.parse(options));
    }
  }, [options]);

  return (
    <div className="option-list">
      <div>
        <h4 style={rest.style}>
          {label}{" "}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </h4>
      </div>
      <div
        className={`flex flex-wrap  box-border ${errors?.message ? "border-yellow" : ""
          } my-4`}
      >
        {parsedOptions.map((option, key) => (
          <div
            className="w-full md:w-auto flex flex-row-reverse md:block my-2 cursor-pointer"
            key={`list_option_key`}
          >
            <label htmlFor={`option_${key}`} className="w-[80%] md:w-auto ml-2">
              {option.text}
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

                if (setValue) setValue(name ?? "", value.join(", "));
              }}
              value={option.value}
              className={`${className ?? ""} ${!!errors ? "border-amber-500 outline-amber-500" : ""
                } w-[10%] min-w-4 md:w-full px-3 pt-8 pb-4  bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
              id={`option_${key}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
