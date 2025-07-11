import { Close } from "@assets/Icons/black/CloseClean";
import { Upload } from "@assets/Icons/black/Upload";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  handleChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  preview: string | undefined;
  setPreview: Dispatch<SetStateAction<string | undefined>>;
};

export function BoardChanges({ preview, handleChangeFile, setPreview }: Props) {
  return (
    <div className="relative  border-dashed border-2 rounded-lg">
      <When value={!preview}>
        <div className="px-4">
          <div className="flex flex-col justify-center items-center h-[27vh]">
            <div className="mb-2">
              <Upload className="w-10 h-10" />
            </div>
            <div className="text-center">
              <p>
                <u>{i18n("Components.gallery.modal_upload_text")}</u>
              </p>
              <span className="text-xs text-disabled">
                {i18n("Components.gallery.modal_upload_max_file")}
              </span>
            </div>
          </div>
          <input
            name={"name"}
            type={"file"}
            multiple={true}
            onChange={handleChangeFile}
            className={`cursor-pointer w-full h-full opacity-0 absolute top-0 left-0`}
          />
        </div>
      </When>
      <When value={!!preview}>
        <div className="relative">
          <div>
            <Image
              src={preview ?? ""}
              width={200}
              height={200}
              className="w-full h-40 object-contain"
              alt="Gallery Preview"
            />
          </div>
          <div>
            <span
              className="absolute top-0 right-0 bg-red cursor-pointer"
              onClick={() => {
                setPreview(undefined);
              }}
            >
              <Close fill="white" />
            </span>
          </div>
        </div>
      </When>
    </div>
  );
}
