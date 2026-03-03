import { When } from "@components/utilities/When";
import React, { useMemo } from "react";
import { Upload } from "@assets/Icons/black/Upload";
import { textColors } from "@assets/colors/colors";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { useFile } from "./hooks/useFile";
import usePostFiles from "@services/Files/Post/usePost";
import { useSnackbar } from "@hooks/useSnackbar";
import i18n from "@configs/i18n";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import { InputProps } from "./type";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export function File(
  {
    className,
    id,
    label,
    required,
    ...rest
  }: InputProps
) {
  const IdCurrent = id ?? `${rest.name}_${new Date().getTime()}`;
  const { currentValue, setCurrentValue } = useFile();
  const { setValue, formState: { errors } } = useFormContext()
  const error = useMemo(() => errors[rest.name as string], [errors, rest.name])
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: uploadFiles, isPending: isLoading } = usePostFiles();

  return (
    <>
      <div className={`relative w-full my-4 ${!!error ? "border-yellow" : ""}`}>
        <label
          className={`${className ?? ""}  w-full pl-3 pr-7 pb-3 pt-5 h-14  line-clamp-1 bg-white  border-secondary  cursor-pointer border-2 rounded-lg text-rose-500 text-sm disabled:bg-disable`}
        >
          <span className="font-medium line-clamp-1">
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
        <input
          type={"file"}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
            const files = ev.currentTarget.files;

            if (!files) return;

            uploadFiles({
              files: Array.from(files),
              packageRef: IdCurrent,
            }).then(({ files: filesUploaded }) => {
              if (filesUploaded.failed.length > 0)
                return dispatchSnackbar({
                  type: "error",
                  message: i18n("Validations.invalid_file"),
                });

              setCurrentValue(files[0]);
              if (setValue && filesUploaded.success.length > 0)
                setValue(rest.name ?? "", JSON.stringify({
                  package: IdCurrent,
                  file: filesUploaded.success[0],
                }));
            });
          }}
          className={`${className} absolute top-4 w-[90%] h-full appearance-none opacity-0`}
          id={IdCurrent}
        />
        <When value={isLoading}>
          <RotateClockwise
            className="absolute right-3 top-4 animate-spin"
            fill="black"
          />
        </When>

      </div>
      <When value={isLoading}>
        <div className="flex items-center justify-center fixed z-50 top-0 left-0 w-full h-full gap-2">
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-25"></div>
          <div className="bg-white text-center relative py-14 px-2 w-[25rem] rounded-md">
            <span className="block mb-5">
              {i18n("Texts.uploading_file_please_wait")}
            </span>
            <RotateClockwise
              className="w-[3rem] h-[3rem] animate-spin mx-auto"
              fill="black"
            />
          </div>
        </div>
      </When>
      <ErrorMessage errors={error?.message as string} />
    </>
  );
}

