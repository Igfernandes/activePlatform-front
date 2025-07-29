import { When } from "@components/utilities/When";
import React from "react";
import { InputProps } from "./type";

export function Color({
  className,
  id,
  label,
  errors,
  name,
  required,
  setValue,
  onChange,
  ...rest
}: InputProps) {
  const IdCurrent = id;

  return (
    <>
      <div
        className={`relative ${
          errors?.message ? "border-yellow" : ""
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
          name={name}
          required={required === "true"}
          onChange={(ev) => {
            if (setValue) setValue(name ?? "", ev.currentTarget.value);
            if (onChange) onChange(ev);
          }}
          type={"color"}
          className={`${className ?? ""} ${
            !!errors ? "border-amber-500 outline-amber-500" : ""
          } block w-full h-12 p-[2px] bg-white border-secondary border-[1px] rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
      </div>
    </>
  );
}
