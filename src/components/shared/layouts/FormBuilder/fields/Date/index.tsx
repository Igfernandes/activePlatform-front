import { When } from "@components/utilities/When";

import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React, { useState } from "react";

import { InputProps } from "./type";
import { getMaskDate } from "@helpers/date";
import { Calendar } from "@assets/Icons/black/Calendar";
import dayjs from "dayjs";
import i18n from "@configs/i18n";
import { FieldShape } from "../../type";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export function Date({
  isLoading = false,
  className,
  id,
  label,
  errors,
  name,
  required,
  labelColor,
  defaultValue,
  labelWeight,
  setValue,
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
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const dateFormatted = getMaskDate(e);
            if (setValue) setValue(name, dateFormatted);
            setDate(dateFormatted);
          }}
          placeholder="Dia/Mes/Ano"
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
            type="date"
            value={dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD")}
            onChange={(ev) => {
              const rawValue = ev.currentTarget.value;

              if (!rawValue) return; // <-- evita setar vazio

              const value = dayjs(rawValue).format(i18n("Configs.format.date"));
              setDate(value);
              if (setValue) setValue(name, value);
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
