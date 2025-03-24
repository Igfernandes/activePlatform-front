import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { useCheckbox } from "./hooks/useCheckbox";
import { CheckboxProps } from "./type";
import { When } from "@components/utilities/When";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      type = "checkbox",
      label,
      id,
      dataTestId,
      errors,
      onChecked,
      defaultValue,
      groupName,
      ...props
    }: CheckboxProps,
    ref
  ) {
    const { handleChecked, isChecked, setIsChecked } = useCheckbox({
      onChecked,
    });
    const currentReferenceName = (groupName ?? props.name) as string;
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();

    useEffect(() => {
      const values = watch(currentReferenceName);

      if (!values) return;

      setIsChecked(values.includes(String(defaultValue)));
    }, [watch(currentReferenceName)]);

    return (
      <div>
        <div className="flex">
          <div
            className="border-2 border-secondary w-6 h-6 relative rounded-[.25rem] cursor-pointer"
            onClick={handleChecked}
          >
            <input
              {...props}
              ref={ref}
              type={type}
              defaultChecked={isChecked}
              defaultValue={defaultValue}
              data-testid={IdCurrent}
              id={IdCurrent}
              className={`${
                isChecked ? "bg-red" : "bg-textDisabled"
              } w-[90%] h-[90%] m-[1px] appearance-none rounded-[.2rem] cursor-pointer`}
            />
            <SymbolChecked className="absolute left-1 top-[25%]" />
          </div>
          <label htmlFor={IdCurrent} className="text-sm ml-2 cursor-pointer">
            {label}
          </label>
        </div>
        <When value={!!errors}>
          <div>
            <span>{errors?.message}</span>
          </div>
        </When>
      </div>
    );
  }
);
