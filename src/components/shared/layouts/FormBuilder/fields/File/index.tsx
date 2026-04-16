import { When } from "@components/utilities/When";
import React from "react";
import { Upload } from "@assets/Icons/black/Upload";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { textColors } from "@assets/colors/colors";
import { InputProps } from "./type";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const File = ({ className, label, required, ...rest }: InputProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [currentValue, setCurrentValue] = React.useState<File | null>(null);

  const { setValue, formState: { errors } } = useFormContext();
  const error = errors[rest.name as string];



  React.useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handler = async () => {
      const file = input.files?.[0];
      if (!file) return;

      setCurrentValue(file);

      setValue(rest.name as string, file, {
        shouldValidate: true,
        shouldDirty: true,
      });
    };

    // IMPORTANT: listeners nativos DOM
    input.addEventListener("change", handler);
    input.addEventListener("input", handler);

    return () => {
      input.removeEventListener("change", handler);
      input.removeEventListener("input", handler);
    };
  }, [setValue, rest.name]);

  const openPicker = () => {
    const input = inputRef.current;
    if (!input) return;

    // força reset (iOS bug fix)
    input.value = "";
    input.click();
  };
  alert(navigator.userAgent);
  return (
    <>
      <div className={`relative w-full my-4 ${!!error ? "border-yellow" : ""}`}>
        <div
          onClick={openPicker}
          className={`${className ?? ""} w-full pl-3 pr-7 pb-3 pt-5 h-14 bg-white border-secondary cursor-pointer border-2 rounded-lg text-sm text-rose-500`}
        >
          <When value={!!currentValue}>
            <span className="font-medium line-clamp-1">
              {currentValue?.name}
            </span>
          </When>

          <When value={!currentValue}>
            <span>
              {label}
              {required && <i className="text-red">*</i>}
            </span>
          </When>

          <Upload className="absolute right-2 top-5" />
        </div>

        <When value={!!currentValue}>
          <CircleRed
            className="absolute right-2 top-5 w-6 cursor-pointer"
            fill={textColors.red}
            onClick={() => {
              setCurrentValue(null);
              if (inputRef.current) inputRef.current.value = "";
              setValue(rest.name as string, undefined);
            }}
          />
        </When>

        {/* INPUT REAL FORA DO FLUXO REACT */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*,.pdf,.xlsx"
          style={{
            position: "absolute",
            left: "-9999px",
          }}
        />
      </div>

      <ErrorMessage errors={error?.message as string} />
    </>
  );
};