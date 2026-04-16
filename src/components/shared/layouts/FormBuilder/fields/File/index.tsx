import { When } from "@components/utilities/When";
import React from "react";
import { Upload } from "@assets/Icons/black/Upload";
import { textColors } from "@assets/colors/colors";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { InputProps } from "./type";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const File = React.forwardRef<HTMLInputElement, InputProps>(
  function File(
    { className, id, label, required, ...rest }: InputProps,
    ref
  ) {
    const idRef = React.useRef(id ?? `${rest.name}_${Date.now()}`);
    const IdCurrent = idRef.current;

    const [currentValue, setCurrentValue] = React.useState<File | undefined>();

    const {
      setValue,
      watch,
      formState: { errors },
    } = useFormContext();

    const file = watch(rest.name)
    const error = errors[rest.name as string];

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    return (
      <>
        <div
          className={`relative w-full my-4 ${!!error ? "border-yellow" : ""}`}
        >
          <label
            onClick={() => inputRef.current?.click()}
            className={`${className ?? ""} w-full pl-3 pr-7 pb-3 pt-5 h-14 line-clamp-1 bg-white border-secondary cursor-pointer border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
          >
            <When value={!!file?.[0]?.name}>
              <span className="font-medium line-clamp-1">
                {file?.[0]?.name}
              </span>
            </When>
            <When value={!file?.[0]?.name}>
              <span
                className="absolute transition-all duration-350 flex"
                style={{
                  left: currentValue ? ".75rem" : "1rem",
                  top: currentValue ? ".10rem" : "1rem",
                  fontSize: currentValue ? ".75rem" : "1rem",
                }}
              >
                {label}
                <When value={required}>
                  <i className="text-red">*</i>
                </When>
              </span>

            </When>
            <When value={!currentValue}>
              <Upload className="absolute right-2 top-5" />
            </When>
          </label>

          <When value={!!currentValue}>
            <CircleRed
              className="absolute right-[2px] top-5 pr-0 w-7 z-40 cursor-pointer bg-white"
              fill={textColors.red}
              onClick={() => {
                setCurrentValue(undefined);
                setValue(rest.name as string, undefined);
              }}
            />
          </When>

          <input
            type="file"
            {...rest}
            ref={ref}
            id={IdCurrent}
            className="absolute top-0 opacity-0 h-full w-full"
            accept="image/*,.pdf,.xlsx"
          />
        </div>

        <ErrorMessage errors={error?.message as string} />
      </>
    );
  }
);