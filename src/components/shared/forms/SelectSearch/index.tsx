import { When } from "@components/utilities/When";
import { SelectProps } from "./type";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useSelect } from "./hooks/useSelect";
import { ArrowDownSimple } from "@assets/Icons/black/ArrowDownSimple";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

export const SelectSearch = React.forwardRef<HTMLInputElement, SelectProps>(
  function SelectSearch(
    {
      dataTestId,
      className = "",
      id,
      label,
      errors,
      name,
      required,
      options = [],
      handledChange,
      ...rest
    }: SelectProps,
    ref
  ) {
    const { labelStyledState, changeLabelClass } = useFieldsAnimation();
    const {
      handleToggleList,
      isShowList,
      handleChangeValue,
      selected,
      handleSearch,
      search,
    } = useSelect();
    const IdCurrent = id ?? dataTestId;

    useEffect(() => {
      if (!!selected) return;
      const defaultSelected = options.filter((options) => options.selected);

      if (defaultSelected[0]) handleChangeValue(name ?? "", defaultSelected[0]);
    }, [options]);

    useEffect(() => {
      changeLabelClass(!!selected ? "UP" : "DOWN");
    }, [selected]);

    return (
      <>
        <div className="relative">
          <label htmlFor={IdCurrent} className="w-full">
            <span
              className={`absolute cursor-pointer top-[2px]  pb-0 left-[2px] rounded-lg pl-2  transition-all duration-350  bg-white`}
              style={{
                ...labelStyledState,
              }}
            >
              {label}
              <When value={required}>
                <span className="text-red">*</span>
              </When>
            </span>
            <input
              {...rest}
              ref={ref}
              name={name}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                if (rest.onChange) rest.onChange(ev);
                if (handledChange) handledChange(ev);
              }}
              type="hidden"
              readOnly={true}
            />
            <p
              onClick={() => handleToggleList(!isShowList)}
              className={`${className} ${
                !!errors ? "border-amber-500 outline-amber-500" : ""
              } 
              h-[3.5rem] w-full px-3 pt-6 pb-2 select-ref cursor-pointer bg-scroll-transparent bg-white border-secondary border-2 rounded-xl text-primary text-md font-medium`}
            >
              {selected} <ArrowDownSimple className="absolute right-4 top-6" />
            </p>
            <div
              className={`content ${
                isShowList ? "block" : "hidden"
              } absolute bg-white w-full p-2 shadow-lg rounded-sm z-50`}
            >
              <div className="search-bar mb-2">
                <input
                  data-testid={dataTestId}
                  id={IdCurrent}
                  type="search"
                  onChange={(ev) => handleSearch(ev.currentTarget.value)}
                  className=" w-full px-3 py-1 cursor-pointer bg-scroll-transparent bg-white border-secondary border-2 rounded-lg text-primary text-md font-medium"
                />
              </div>
              <ul className=" h-[15vh] overflow-y-auto">
                {options
                  .filter(
                    (option) =>
                      !search ||
                      option.text.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(({ text, value }, index) => (
                    <li
                      onClick={() => {
                        handleChangeValue(name ?? "", { text, value });
                        handleToggleList(false);
                      }}
                      key={index}
                      value={value ?? ""}
                      className={`px-2 py-1 cursor-pointer hover:bg-red hover:text-white rounded-sm`}
                    >
                      {text}
                    </li>
                  ))}
              </ul>
            </div>
          </label>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
