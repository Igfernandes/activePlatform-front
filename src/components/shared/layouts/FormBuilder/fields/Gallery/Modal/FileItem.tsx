import { When } from "@components/utilities/When";
import { ImageSimple } from "@assets/Icons/black/ImageSimple";
import { FileSimple } from "@assets/Icons/black/FileSimple";
import { bytesToMB, getFileUrl } from "@helpers/file";
import { Close } from "@assets/Icons/black/CloseClean";
import i18n from "@configs/i18n";
import { useStrings } from "@hooks/useStrings";
import { FileItemProps } from "./type";

export function FileItem({
  setPreview,
  file,
  id,
  handleDelete,
}: FileItemProps) {
  const { type, name, ref, status } = file;
  const { getClampString } = useStrings();

  return (
    <li className="border-2 p-2 rounded-md w-full mt-2">
      <div className="flex">
        <div className="py-2 px-3">
          <When value={!!type.startsWith("image/")}>
            <ImageSimple />
          </When>
          <When value={!!type.startsWith("application/")}>
            <FileSimple />
          </When>
        </div>
        <div>
          <p className="text-sm">{getClampString(name, 40)}</p>
          <p className="text-xs">
            {bytesToMB(ref?.size ?? "")}
            <When value={status == "INVALIDED"}>
              &nbsp; |&nbsp;
              <span className="text-red">{i18n("Texts.file_invalid")}</span>
            </When>
          </p>
        </div>
        <div className="text-center ml-auto">
          <span className="cursor-pointer" onClick={() => handleDelete(id)}>
            <Close className="w-4 mx-auto" />
          </span>
          <When value={!!type.startsWith("image/")}>
            <span
              className="text-sm cursor-pointer"
              onClick={() => {
                setPreview(getFileUrl(ref));
              }}
            >
              <u>{i18n("Words.see")}</u>
            </span>
          </When>
        </div>
      </div>
    </li>
  );
}
