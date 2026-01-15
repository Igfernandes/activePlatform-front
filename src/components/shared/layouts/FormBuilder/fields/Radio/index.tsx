import { When } from "@components/utilities/When";

import React from "react";

import { InputProps } from "./type";

export function Radio({
  className,
  id,
  label,
  errors,
  name,
  placeholder,
  required,
  setValue,
  ...rest
}: InputProps) {
  const IdCurrent = id;

  return (
    <>
      <div className={`flex ${errors?.message ? "border-yellow" : ""} my-4`}>
        <input
          {...rest}
          name={name}
          type="radio"
          required={required === "true"}
          placeholder={rest.type == "date" ? " " : placeholder}
          onChange={(ev) => {
            if (setValue) setValue(name ?? "", ev.currentTarget.value);
          }}
          className={`${className ?? ""} ${
            !!errors ? "border-amber-500 outline-amber-500" : ""
          } px-3 pt-8 pb-4  bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <label htmlFor={IdCurrent} className="ml-2">
          {label}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </label>
      </div>
    </>
  );
}
