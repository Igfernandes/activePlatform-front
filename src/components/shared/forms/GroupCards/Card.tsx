import { Accept } from "@assets/Icons/black/Accept";
import { GroupCardItemShape } from "./type";
import React, { useEffect, useState } from "react";
import { textDefaultColors } from "@assets/colors/default";
import { useFormContext } from "react-hook-form";

export const Card = React.forwardRef<HTMLInputElement, GroupCardItemShape>(
  function Card(
    { label, value, disabled, icon, index, text, ...props }: GroupCardItemShape,
    ref
  ) {
    const { watch } = useFormContext();
    const [isChecked, setIsChecked] = useState<boolean>();

    useEffect(() => {
      const value = watch(props.name ?? "");

      setIsChecked(!!value);
    }, []);

    return (
      <label
        htmlFor={`key_group_checks_${value}_${index}`}
        key={`key_group_checks_${value}_${index}`}
        className={`w-[19%] min-w-[190px] mx-1 border-[1px] ${
          isChecked
            ? "border-cross-black-primary"
            : "border-cross-black-secondary"
        }  ${
          disabled ? "bg-disabled opacity-60" : ""
        } p-4 rounded-2xl mx-2 mb-4 cursor-pointer`}
        onClick={(ev) => {
          const div = ev.currentTarget;
          const input = div.querySelector("input");

          if (!input) return;

          setIsChecked(input.checked);
        }}
      >
        <div className="header flex justify-between items-center mb-2">
          <div className=" bg-white p-[5px] md:px-[8px] md:py-[7px] rounded-2xl">{icon}</div>
          <div className="relative">
            <input
              {...props}
              ref={ref}
              defaultValue={value}
              disabled={disabled}
              type="checkbox"
              className={`px-[8px] h-5 rounded-xl border-2 ${
                isChecked ? "border-success" : "border-disabled"
              } checked:bg-success appearance-none ml-auto`}
              id={`key_group_checks_${value}_${index}`}
            />
            <Accept
              className="absolute top-[4px] left-1 md:top-[5px] md:left-[5px] w-3 h-3 md:w-[10px] md:h-[10px]"
              fill={isChecked ? "#fff" : textDefaultColors.disabled}
            />
          </div>
        </div>
        <div>
          <div>
            <span className="font-bold">{label}</span>
          </div>
          <div>
            <p className="text-sm">{text}</p>
          </div>
        </div>
      </label>
    );
  }
);
