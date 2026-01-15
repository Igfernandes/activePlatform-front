import { When } from "@components/utilities/When";

import React, { useEffect } from "react";

import { InputProps } from "./type";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDatetime } from "./hooks/useDatetime";
import { useFormContext } from "react-hook-form";
import { Schedule } from "@assets/Icons/black/Schedule";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFields } from "../../hooks/useFields";

dayjs.extend(customParseFormat);

export const Datetime = React.forwardRef<HTMLInputElement, InputProps>(
  function Datetime(
    {
      className,
      id,
      label,
      required,
      ...rest
    }: InputProps,
    ref
  ) {
    const { handleUpdateDatetimePreview, datetime, setDatetime } =
      useDatetime();
    const IdCurrent = id;
    const { setValue, watch, formState: { errors } } = useFormContext();
    const currentDateValue = watch(rest?.name as string);
    const { error } = useFields({ name: rest.name as string, required });
    const name = rest.name as string;

    useEffect(() => {
      setDatetime(currentDateValue ? dayjs(currentDateValue).format("DD/MM/YYYY HH:mm") : "");
    }, [currentDateValue, setDatetime]);

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
          <input
            type={"text"}
            name={`datetime_ref_${name}`}
            onChange={(ev) => {
              const value = ev.currentTarget.value;
              const datetimeUpdated = dayjs(value, "DD/MM/YYYY HH:mm");

              if (datetimeUpdated.isValid()) {
                setValue(name, datetimeUpdated.format("YYYY-MM-DD HH:mm"));
              } else if (!value) {
                setValue(name, "");
              }
              handleUpdateDatetimePreview(value);
            }}
            value={datetime ?? ""}
            placeholder={"DD/MM/YYYY HH:mm"}
            className={`${className ?? 'w-full'} ${!!errors ? "border-amber-500 outline-amber-500" : ""
              } px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
            id={IdCurrent}
          />
          <div className="absolute right-1 bottom-4 md:right-3 md:bottom-4">
            <input
              ref={ref}
              {...rest}
              type="datetime-local"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                const formatted = ev.currentTarget.value.replace("T", " ");
                setValue(name, formatted);
                handleUpdateDatetimePreview(formatted);
              }}
              className="absolute w-full h-full top-0 right-0 opacity-0 z-20"
            />
            <Schedule className="w-5" />
          </div>

        </div>
        <ErrorMessage errors={error?.message as string} />
      </>
    );
  }
)