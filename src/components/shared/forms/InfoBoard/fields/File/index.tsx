import { When } from "@components/utilities/When";
import { useFormContext } from "react-hook-form";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { textColors } from "@assets/colors/colors";
import usePostFiles from "@services/Files/Post/usePost";
import { useSnackbar } from "@hooks/useSnackbar";
import i18n from "@configs/i18n";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import { Upload } from "@assets/Icons/black/Upload";
import { useEffect, useState } from "react";
import { TFields } from "../../type";
import Link from "next/link";
import { FileSimple } from "@assets/Icons/black/FileSimple";

export function TFile({ label, name, className, defaultValue }: TFields) {
  const { watch, setValue } = useFormContext();
  const { dispatchSnackbar } = useSnackbar();
  const currentId = name;
  const { mutateAsync: uploadFiles, isPending: isLoading } = usePostFiles();
  const value = watch(name) as string;
  const [currentUrlFile, setCurrentUrlFile] = useState<string>(
    defaultValue ?? ""
  );

  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  useEffect(() => {
    if (!value || !value.includes("{")) return setCurrentUrlFile(value);

    const fileSettings = JSON.parse(value);

    setCurrentUrlFile(fileSettings.file);
  }, [value]);

  return (
    <tr className="border-t-2 border-t-zinc-200 ">
      <td className="py-2 pl-4 w-2/6">
        <label htmlFor={currentId}>
          <strong>{label}</strong>
        </label>
      </td>
      <td>
        <div className="flex items-center bg-zinc-100  my-2 ">
          <div className="relative w-full  bg-zinc-100 py-1 px-2">
            <span className="line-clamp-1 h-6">{currentUrlFile}</span>
            <When value={!!value}>
              <CircleRed
                className="absolute right-[2px] top-[5px] pr-0 w-7 z-40 cursor-pointer "
                fill={textColors.red}
                onClick={() => {
                  setValue(name, "");
                }}
              />
            </When>
            <When value={!value && !isLoading}>
              <Upload className="absolute right-2 top-1" />
            </When>
            <input
              name={name}
              type={"file"}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                const files = ev.currentTarget.files;

                if (!files || Array.from(files).length == 0) return;

                uploadFiles({
                  files: Array.from(files),
                  packageRef: currentId,
                }).then(({ files: filesUploaded }) => {
                  if (filesUploaded.failed.length > 0)
                    return dispatchSnackbar({
                      type: "error",
                      message: i18n("Validations.invalid_file"),
                    });

                  if (setValue)
                    setValue(
                      name ?? "",
                      JSON.stringify({
                        package: currentId,
                        file: filesUploaded.success[0],
                      })
                    );
                });
              }}
              className={`${className} appearance-none opacity-0  absolute left-0 top-0 w-full h-full`}
              data-testid={currentId}
              id={currentId}
            />
            <When value={isLoading}>
              <RotateClockwise
                className="absolute right-3 top-1 animate-spin"
                fill="black"
              />
            </When>
          </div>
          <div>
            <Link href={currentUrlFile ?? ""} target={"_blank"}>
              <FileSimple />
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
}
