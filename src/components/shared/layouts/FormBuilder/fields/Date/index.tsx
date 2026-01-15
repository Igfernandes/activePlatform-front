import { When } from "@components/utilities/When";

import React from "react";

import { InputProps } from "./type";
import { handleMaskDate } from "@helpers/date";
import { Calendar } from "@assets/Icons/black/Calendar";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDate } from "./hooks/useDate";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFields } from "../../hooks/useFields";

dayjs.extend(customParseFormat);

export const Date = React.forwardRef<HTMLInputElement, InputProps>(
  function Date(
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
    const { setValue } = useFormContext();
    const { setDate, date } = useDate()
    const { error } = useFields({ name: rest.name as string, required });
    const name = rest.name as string;

    return (
      <>
        <div className={`relative w-full my-4 ${error?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}
            className={`absolute top-2 left-4 text-[.75rem] transition-all duration-350 line-clamp-1`}
          >
            {label}
            <When value={!!required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input placeholder={"DD/MM/AAAA"}
            className={`${className ?? 'w-full'} ${!!error ? "border-amber-500 outline-amber-500" : ""
              } px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}

            id={IdCurrent} type="text"
            value={date}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              const value = ev.currentTarget.value
              const currentValue = dayjs(value, "DD/MM/YYYY");

              if (currentValue.isValid()) {
                setValue(name, currentValue.format("YYYY-MM-DD"))
              }

              setDate(handleMaskDate(ev as React.ChangeEvent<HTMLInputElement>));
            }}  />
          <div className="absolute right-3 top-5">
            <Calendar />
            <input
              {...rest}
              ref={ref}
              type={"date"}
              name={name}
              onChange={(ev) => {
                const value = ev.currentTarget.value;
                setValue(name, value)
                setDate(dayjs(value).format("DD/MM/YYYY"))
              }}
              className="opacity-0 absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
        <ErrorMessage errors={error?.message as string} />
      </>
    );
  }
);