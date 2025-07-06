import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import React, { useRef } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { Upload } from "@assets/Icons/black/Upload";
import { textColors } from "@assets/colors/colors";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { useFile } from "./hooks/useFile";

export const File = React.forwardRef<HTMLInputElement, InputProps>(
  function File({
    dataTestId,
    className,
    id,
    label,
    errors,
    name,
    required,
    ...rest
  }: InputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const IdCurrent = id ?? dataTestId ?? `${name}_${new Date().getTime()}`;
    const { currentValue, setCurrentValue } = useFile();

    return (
      <>
        <div className="relative w-full my-4">
          <label
            className={`${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } ${
              className ?? ""
            }  w-full pl-3 pr-7 pb-3 pt-5 h-14  line-clamp-1 bg-white  border-secondary  cursor-pointer border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          >
            <span className="font-medium line-clamp-1">
              {" "}
              {currentValue?.name as string}
            </span>
            <span
              className={`absolute transition-all duration-350 flex`}
              style={{
                left: !!currentValue ? ".75rem" : "1rem",
                top: !!currentValue ? ".10rem" : "1rem",
                fontSize: !!currentValue ? ".75rem" : "1rem",
              }}
            >
              {label}
              <When value={required}>
                <i className="text-red">*</i>
              </When>
            </span>
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
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            />
          </When>
          <input
            {...rest}
            ref={fileInputRef}
            name={name}
            type={"file"}
            required={required}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              const files = ev.currentTarget.files;
              if (files) setCurrentValue(files[0]);
            }}
            className={`${className} absolute top-4 w-[90%] h-full appearance-none opacity-0`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
