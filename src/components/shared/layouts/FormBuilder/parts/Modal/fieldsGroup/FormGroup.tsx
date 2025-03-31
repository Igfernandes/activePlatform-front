import i18n from "@configs/i18n";
import { FormGroupProps } from "./type";

export function FormGroup({
  label,
  name,
  placeholder,
  defaultValue = "",
  type = "text",
  measure,
  onChange,
  min = 0,
  ...inputProps
}: FormGroupProps) {
  return (
    <div className="form-group my-3">
      <label htmlFor="label" className="font-semibold">
        {i18n(`words.${label}`) ?? ""}:
      </label>
      <input
        {...inputProps}
        type={type}
        min={min}
        name={name}
        placeholder={placeholder}
        value={defaultValue?.replace(measure ?? "", "") ?? ""}
        data-measure={measure}
        className="border-2 border-zinc-400 block w-full p-1"
        onChange={onChange}
      />
    </div>
  );
}
