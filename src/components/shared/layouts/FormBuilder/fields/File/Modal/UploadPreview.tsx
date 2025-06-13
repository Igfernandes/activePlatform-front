import { Close } from "@assets/Icons/black/CloseClean";
import { Photo } from "@assets/Icons/black/Photo";
import { formatFileSize } from "@helpers/file";

type Props = {
  file?: File;
  progress: number;
  onCleanFile: () => void;
};

export function UploadPreview({ file, onCleanFile, progress }: Props) {
  return (
    <div className="relative">
      <label className="block max-h-[104px] w-[376px] rounded-lg border border-secondary py-2 pl-2 cursor-pointer">
     
        <div className="flex">
          <div>
            <Photo />
          </div>
          <div className="pr-5 pl-1 ">
            <span
              className="break-words text-xs w-[50%] font-bold
          "
            >
              {file?.name && file?.name.length > 40
                ? file?.name.substring(0, 39) + "..." + file.type.split("/")[1]
                : file?.name}
            </span>
            <span className="block text-xs">{formatFileSize(file)}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full bg-secondary rounded-full mt-4 mb-2 ml-6">
            <div
              className="bg-black h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mr-[8px] ml-2">
            <span className="text-[10px] relative top-[2px] font-bold">{`${progress}%`}</span>
          </div>
        </div>
      </label>
      <Close className="w-4 absolute right-2 top-2" onClick={onCleanFile} />
    </div>
  );
}
