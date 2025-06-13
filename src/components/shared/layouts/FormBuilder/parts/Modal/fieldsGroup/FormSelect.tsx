import i18n from "@configs/i18n";
import { FormSelectProps } from "./type";

export function FormSelect({
  label,
  name,
  defaultValue = "",
  options,
  onChange,
  ...inputProps
}: FormSelectProps) {
  return (
    <div className="form-group my-3">
      <label htmlFor="label" className="font-semibold">
        {i18n(`Words.${label}`) ?? ""}:
      </label>
      <select
        {...inputProps}
        name={name}
        defaultValue={defaultValue ?? ""}
        className="border-2 border-zinc-400 block w-full p-1"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option
            value={option.value}
            selected={option.selected}
            key={`${name}_${index}`}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
