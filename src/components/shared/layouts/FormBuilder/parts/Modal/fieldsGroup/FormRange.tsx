import i18n from "@configs/i18n";
import { ChangeEvent, useState } from "react";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  measure?: "px" | "%";
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export function FormRange({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  measure = "%",
}: Props) {
  const [value, setValue] = useState<string | undefined>(
    defaultValue?.replace(measure, "") ?? "0"
  );
  return (
    <div className="form-group my-3">
      <label htmlFor="label" className="font-semibold">
        {i18n(`Words.${label}`)}:
        <span className="text-lg font-light text-blue-600 ml-2">{value}</span>
      </label>
      <input
        type={"range"}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        value={value}
        data-measure={measure}
        min="0"
        max="100"
        className="w-full h-2 bg-gray-300 border-2 border-zinc-400 rounded-lg appearance-none cursor-pointer 
                   accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400
                   [&::-webkit-slider-runnable-track]:bg-gray-900 
                   [&::-webkit-slider-runnable-track]:rounded-lg 
                   [&::-webkit-slider-thumb]:appearance-none 
                   [&::-webkit-slider-thumb]:h-6 
                   [&::-webkit-slider-thumb]:w-6 
                   [&::-webkit-slider-thumb]:bg-zinc-400 
                   [&::-webkit-slider-thumb]:rounded-full 
                   [&::-webkit-slider-thumb]:shadow-md 
                   [&::-webkit-slider-thumb]:-mt-0
                   [&::-moz-range-thumb]:h-6 
                   [&::-moz-range-thumb]:w-6 
                   [&::-moz-range-thumb]:bg-blue-500 
                   [&::-moz-range-thumb]:rounded-full"
        onChange={(ev) => {
          if (onChange) onChange(ev);
          setValue(ev.target.value);
        }}
      />
    </div>
  );
}
