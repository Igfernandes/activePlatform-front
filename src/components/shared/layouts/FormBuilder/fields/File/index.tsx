import { When } from "@components/utilities/When";
import React from "react";
import { Upload } from "@assets/Icons/black/Upload";
import { textColors } from "@assets/colors/colors";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import usePostFiles from "@services/Files/Post/usePost";
import { useSnackbar } from "@hooks/useSnackbar";
import i18n from "@configs/i18n";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import { InputProps } from "./type";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export function File({
  className,
  id,
  label,
  required,
  ...rest
}: InputProps) {
  const idRef = React.useRef(id ?? `${rest.name}_${Date.now()}`);
  const IdCurrent = idRef.current;

  const [currentValue, setCurrentValue] = React.useState<File>();

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const file = watch(rest.name)

  const error = errors[rest.name as string];

  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: uploadFiles, isPending: isLoading } = usePostFiles();

  return (
    <>
      <div
        className={`relative w-full my-4 ${!!error ? "border-yellow" : ""}`}
      >
        <label
          htmlFor={IdCurrent}
          className={`${className ?? ""} w-full pl-3 pr-7 pb-3 pt-5 h-14 line-clamp-1 bg-white border-secondary cursor-pointer border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
        >
          <span className="font-medium line-clamp-1">
            {currentValue?.name}
          </span>

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

          <When value={!currentValue && !isLoading}>
            <Upload className="absolute right-2 top-5" />
          </When>
        </label>

        <When value={!!currentValue}>
          <CircleRed
            className="absolute right-[2px] top-5 pr-0 w-7 z-40 cursor-pointer bg-white"
            fill={textColors.red}
            onClick={() => {
              setCurrentValue(undefined);
            }}
          />
        </When>

        <Controller
          name={rest.name as string}
          control={control}
          render={({ field }) => (
            <input
              type="file"
              id={IdCurrent}
              accept=".pdf,.xlsx,.png,.jpg,.jpeg,.heic"
              
              onChange={(ev) => {
                const file = ev.currentTarget.files?.[0];
                dispatchSnackbar({
                  type: "error",
                  message: JSON.stringify(ev.currentTarget.files),
                });
                if (!file) return;

                setCurrentValue(file);

                uploadFiles({
                  files: [file],
                  packageRef: IdCurrent,
                }).then(({ files: filesUploaded }) => {
                  if (filesUploaded.failed.length > 0) {
                    dispatchSnackbar({
                      type: "error",
                      message: i18n("Validations.invalid_file"),
                    });
                    return;
                  }

                  field.onChange(
                    JSON.stringify({
                      package: IdCurrent,
                      file: filesUploaded.success[0],
                    })
                  );
                });
              }}
            />
          )}
        />
        <h1>{JSON.stringify(file)}</h1>

        <When value={isLoading}>
          <RotateClockwise
            className="absolute right-3 top-4 animate-spin"
            fill="black"
          />
        </When>
      </div>



      <ErrorMessage errors={error?.message as string} />
    </>
  );
}