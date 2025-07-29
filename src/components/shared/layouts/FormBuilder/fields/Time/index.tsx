import { When } from "@components/utilities/When";
import React, { useRef, useState } from "react";

import { InputProps } from "./type";
import { FieldShape } from "../../type";
import { Clock } from "@assets/Icons/black/Clock";
import { getMaskTime } from "@helpers/date";

export function Time({
  className,
  id,
  label,
  errors,
  name,
  required,
  labelColor,
  labelWeight,
  setValue,
  defaultValue,
  ...rest
}: InputProps & FieldShape) {
  const IdCurrent = id;
  const inputRef = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState(defaultValue);

  return (
    <>
      <div
        className={`relative ${
          errors?.message ? "border-yellow" : ""
        } w-full my-4`}
      >
        <label
          htmlFor={IdCurrent}
          className={`absolute transition-all duration-350 line-clamp-1 left-4 top-2 text-[.75rem]`}
          style={{
            color: labelColor,
            fontWeight: labelWeight,
          }}
        >
          {label}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </label>
        <input
          {...rest}
          type="text"
          ref={inputRef}
          name={name}
          value={time}
          placeholder="HH:MM"
          required={required === "true"}
          onChange={(ev) => {
            const value = getMaskTime(ev);
            setTime(value);
            if (setValue) setValue(name ?? "", value);
          }}
          className={`${className ?? ""} ${
            !!errors ? "border-amber-500 outline-amber-500" : ""
          } w-full min-h-[3.5rem] px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <div className="absolute w-[30px] h-4 right-2 top-5">
          <Clock className="h-full w-full" />
          <input
            type={"time"}
            value={time}
            onChange={(ev) => {
              setTime(ev.currentTarget.value);
              if (setValue) setValue(name, ev.currentTarget.value);
            }}
            className=" opacity-0 absolute top-0 w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
