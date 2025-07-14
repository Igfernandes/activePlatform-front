import { When } from "@components/utilities/When";

import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React, { useEffect } from "react";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

import { InputProps } from "./type";
import { useInput } from "./hooks/useInput";

export function Input({
  isLoading = false,
  className,
  id,
  label,
  errors,
  name,
  placeholder,
  required,
  type,
  setValue,
  onChange,
  ...rest
}: InputProps) {
  const { labelStyledState, handleTransitionLabel, changeLabelClass } =
    useFieldsAnimation();
  const IdCurrent = id;
  const { isUpLabel } = useInput();

  useEffect(() => {
    changeLabelClass(isUpLabel({ placeholder, ...rest }) ? "UP" : "DOWN");
  }, [placeholder]);

  return (
    <>
      <div
        className={`relative ${
          errors?.message ? "border-yellow" : ""
        } w-full my-2`}
      >
        <label
          htmlFor={IdCurrent}
          className={`absolute transition-all duration-350 line-clamp-1`}
          style={{
            ...labelStyledState,
          }}
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
          onFocus={handleTransitionLabel}
          onBlur={handleTransitionLabel}
          onChange={(ev) => {
            if (setValue) setValue(name ?? "", ev.currentTarget.value);
            if (onChange) onChange(ev);
          }}
          type={type}
          placeholder={type == "date" ? " " : placeholder}
          className={`${className ?? ""} ${
            !!errors ? "border-amber-500 outline-amber-500" : ""
          } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <When value={isLoading}>
          <RotateClockwise
            className="absolute right-3 top-4 animate-spin"
            fill="black"
          />
        </When>
      </div>
    </>
  );
}
