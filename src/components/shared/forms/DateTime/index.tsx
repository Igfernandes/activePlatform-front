import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { Schedule } from "@assets/Icons/black/Schedule";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDatetime } from "./hooks/useDatetime";

dayjs.extend(customParseFormat);
export const Datetime = React.forwardRef<HTMLInputElement, InputProps>(
  function Datetime(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      required,
      handledChange,
      defaultValue,
      ...rest
    }: InputProps,
    ref
  ) {
    const { handleUpdateDatetimePreview, datetime, setDatetime } =
      useDatetime();
    const IdCurrent = id ?? dataTestId;
    const { setValue } = useFormContext();

    useEffect(() => {
      if (!defaultValue) return;

      setDatetime(dayjs(defaultValue as string).format("DD/MM/YYYY HH:mm"));
    }, [defaultValue]);

    return (
      <>
        <div className={`relative ${errors?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}
            className={`absolute top-2 left-4 text-[.75rem] transition-all duration-350 line-clamp-1`}
          >
            {label}
            <When value={required}>
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
              }
              handleUpdateDatetimePreview(value);
            }}
            value={datetime}
            placeholder={"DD/MM/YYYY HH:mm"}
            className={`${className} ${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
          <div className="absolute right-3 bottom-4">
            <input
              {...rest}
              ref={ref}
              name={name}
              defaultValue={defaultValue}
              type="datetime-local"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                if (rest.onChange) rest.onChange(ev);
                if (handledChange) handledChange(ev);
                handleUpdateDatetimePreview(ev.currentTarget.value);
              }}
              className="absolute w-full h-full top-0 opacity-0 z-20"
            />
            <Schedule className="w-5" />
          </div>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
