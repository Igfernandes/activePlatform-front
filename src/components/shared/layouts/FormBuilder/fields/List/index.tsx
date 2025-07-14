import { When } from "@components/utilities/When";

import React, { useRef } from "react";

import { InputProps } from "./type";
import { OptionShape } from "../../parts/Modal/tabs/Settings/GroupsTab/type";

export function List({
  className,
  errors,
  name,
  required,
  options,
  label,
  setValue,
  ...rest
}: InputProps) {
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
      <div
        className={`flex flex-wrap md:flex-nowrap ${
          errors?.message ? "border-yellow" : ""
        } my-4`}
      >
        {optionsRef.current.map((option, key) => (
          <div
            className="w-full md:w-full flex flex-row-reverse md:block my-2 cursor-pointer"
            key={`list_option_key`}
          >
            <label htmlFor={`option_${key}`} className="w-[90%] md:w-auto ml-2">
              {option.text}
            </label>
            <input
              {...rest}
              name={name}
              type="radio"
              onChange={(ev) => {
                if (setValue) setValue(name ?? "", ev.currentTarget.value);
              }}
              required={required === "true"}
              value={option.value}
              className={`${className ?? ""} ${
                !!errors ? "border-amber-500 outline-amber-500" : ""
              } w-[10%] md:w-full px-3 pt-8 pb-4  bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
              id={`option_${key}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
