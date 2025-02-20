import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";
import { useEffect } from "react";
import { SearchProps } from "./type";

export function Search({
  dataTestId,
  label,
  id,
  placeholder,
  name,
  className,
  handleSearch,
}: SearchProps) {
  const { labelStyledState, handleTransitionLabel, changeLabelClass } =
    useFieldsAnimation();
  const IdCurrent = id ?? dataTestId;

  useEffect(() => {
    changeLabelClass(placeholder ? "UP" : "DOWN");
  }, [placeholder]);

  return (
    <div className={className}>
      <div className="form-group">
        <div className="relative">
          <label
            htmlFor={IdCurrent}
            className={`absolute transition-all duration-350`}
            style={{
              ...labelStyledState,
            }}
          >
            {label}
          </label>
          <input
            name={name}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            onChange={(ev) => handleSearch(ev.currentTarget.value)}
            placeholder={placeholder}
            className={`  w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
      </div>
    </div>
  );
}
