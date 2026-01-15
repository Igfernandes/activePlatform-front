import { When } from "@components/utilities/When";
import React, { useState } from "react";

import { InputProps } from "./type";
import { Clock } from "@assets/Icons/black/Clock";
import { getMaskTime } from "@helpers/date";
import { useFormContext } from "react-hook-form";
import { useFields } from "../../hooks/useFields";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const Time = React.forwardRef<HTMLInputElement, InputProps>(
  function Time(
    {
      className,
      id,
      label,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id;
    const { setValue, formState: { errors } } = useFormContext()
    const { error, handleHasError } = useFields({ name: rest.name as string, required });
    const [time, setTime] = useState(rest.defaultValue as string || "");

    return (
      <>
        <div
          className={`relative ${errors?.message ? "border-yellow" : ""
            } w-full my-1`}
        >
          <label
            htmlFor={IdCurrent}
            className={`absolute transition-all duration-350 line-clamp-1 left-4 top-2 text-[.75rem]`}
          >
            {label}
            <When value={!!required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input
            type="text"
            value={time}
            placeholder="HH:MM"
            onChange={(ev) => {
              const value = getMaskTime(ev);
              setTime(value);
              if (setValue) setValue(rest.name ?? "", value);
              handleHasError();
            }}
            className={`h-7 py-1 px-2 ${className ?? ""} ${!!errors ? "border-amber-500 outline-amber-500" : ""
              } w-full min-h-[3.5rem] px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            id={IdCurrent}
          />
          <div className="absolute w-[30px] h-4 right-2 top-5">
            <Clock className="h-full w-full" />
            <input
              {...rest}
              type={"time"}
              ref={ref}
              value={time}
              onChange={(ev) => {
                setTime(ev.currentTarget.value);
                if (setValue) setValue(rest.name ?? "", ev.currentTarget.value);
              }}
              className=" opacity-0 absolute top-0 w-full h-full"
            />
          </div>
          <ErrorMessage errors={!!error ? error?.message as string : undefined} />
        </div>
      </>
    );
  }
);