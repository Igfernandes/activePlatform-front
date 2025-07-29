import { When } from "@components/utilities/When";

import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React, { useState } from "react";

import { InputProps } from "./type";
import { getFormattedDatetime } from "@helpers/date";
import { Calendar } from "@assets/Icons/black/Calendar";
import dayjs from "dayjs";
import i18n from "@configs/i18n";
import { FieldShape } from "../../type";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function Datetime({
  isLoading = false,
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
  const [date, setDate] = useState<string | undefined>(defaultValue);

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
          name={name}
          required={required === "true"}
          type={"text"}
          placeholder="Dia/Mes/Ano Hora:Minuto"
          value={defaultValue ?? date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const numberFormatted = getFormattedDatetime(e);

            if (setValue) setValue(name ?? "", numberFormatted);
            setDate(numberFormatted);
          }}
          className={`${className ?? ""} ${
            !!errors ? "border-amber-500 outline-amber-500" : ""
          } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <div className="absolute right-4 top-4">
          <label htmlFor={`calendar_${name}`}>
            <Calendar fill={labelColor} />
          </label>
          <input
            id={`calendar_${name}`}
            type="datetime-local"
            value={dayjs(date, "DD/MM/YYYY HH:mm").format("YYYY-MM-DD HH:mm")}
            onChange={(ev) => {
              const dateFormatted = dayjs(ev.currentTarget.value).format(
                i18n("Configs.format.datetime")
              );
              if (setValue) setValue(name ?? "", dateFormatted);

              setDate(dateFormatted);
            }}
            className="opacity-0 absolute w-4 h-full top-0"
          />
        </div>
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
