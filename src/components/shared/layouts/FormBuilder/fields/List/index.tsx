import { When } from "@components/utilities/When";

import React, { useRef } from "react";

import { InputProps } from "./type";
import { OptionShape } from "../../parts/Modal/tabs/Settings/GroupsTab/type";

export function List({
  className,
  id,
  errors,
  name,
  required,
  options,
  label,
  ...rest
}: InputProps) {
  const IdCurrent = id;
  const optionsRef = useRef<Array<OptionShape>>(
    JSON.parse(options ?? "[]") as Array<OptionShape>
  );

  return (
    <div>
      <div>
        <h4 style={rest.style}>
          {label}{" "}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </h4>
      </div>
      <div className={`flex ${errors?.message ? "border-yellow" : ""} my-4`}>
        {optionsRef.current.map((option) => (
          <div key={`list_option_key`}>
            <label htmlFor={IdCurrent} className="ml-2">
              {option.text}
            </label>
            <input
              {...rest}
              name={name}
              type="radio"
              required={required === "true"}
              value={option.value}
              className={`${className ?? ""} ${
                !!errors ? "border-amber-500 outline-amber-500" : ""
              } px-3 pt-8 pb-4  bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
              id={IdCurrent}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
