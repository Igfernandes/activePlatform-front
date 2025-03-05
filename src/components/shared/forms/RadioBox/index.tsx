import { When } from "@components/utilities/When";
import React from "react";
import { useFormContext } from "react-hook-form";
import { RadioBoxProps } from "./type";

export const RadioBox = React.forwardRef<HTMLInputElement, RadioBoxProps>(
  function RadioBox(
    {
      type = "radio",
      label,
      id,
      icon,
      dataTestId,
      errors,
      ...props
    }: RadioBoxProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();

    return (
      <div>
        <div>
          <label
            htmlFor={IdCurrent}
            className={`${
              watch(`${props.name}`) == props.defaultValue
                ? "border-red"
                : "border-secondary"
            } border-2 w-full flex p-3 rounded-xl cursor-pointer`}
          >
            {icon}
            <span className="ml-2">{label}</span>
          </label>
        </div>
        <input
          {...props}
          ref={ref}
          type={type}
          data-testid={IdCurrent}
          id={IdCurrent}
          className={`appearance-none`}
        />
        <When value={!!errors}>
          <div>
            <span>{errors?.message}</span>
          </div>
        </When>
      </div>
    );
  }
);
