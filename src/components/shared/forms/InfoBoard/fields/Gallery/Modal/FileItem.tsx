import { When } from "@components/utilities/When";
import { ImageSimple } from "@assets/Icons/black/ImageSimple";
import { FileSimple } from "@assets/Icons/black/FileSimple";
import { bytesToMB, getFileUrl } from "@helpers/file";
import { Close } from "@assets/Icons/black/CloseClean";
import i18n from "@configs/i18n";
import { useStrings } from "@hooks/useStrings";
import { FileItemProps } from "./type";
import useWindow from "@hooks/useWindow";

export function FileItem({
  setPreview,
  file,
  id,
  handleDelete,
}: FileItemProps) {
  const { type, name, ref, status } = file;
  const { getClampString } = useStrings();
  const { screenType } = useWindow();

  return (
    <li className="border-2 p-2 rounded-md w-full mt-2">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-1/6 py-2 px-1 md:px-3">
          <When value={!!type.startsWith("image/")}>
            <ImageSimple />
          </When>
          <When value={!!type.startsWith("application/")}>
            <FileSimple />
          </When>
        </div>
        <div className="w-5/6">
          <p className="text-sm">{getClampString(name, 40)}</p>
          <p className="text-xs">
            {bytesToMB(ref?.size ?? "")}
            <When value={status == "INVALIDED"}>
              &nbsp; |&nbsp;
              <span className="text-red">{i18n("Texts.file_invalid")}</span>
            </When>
          </p>
        </div>
        <div className="flex md:block text-center ml-auto mt-2">
          <div
            className="cursor-pointer pt-[2px] md:pt-0 mr-1 md:mr-0"
            onClick={() => handleDelete(id)}
          >
            <When value={screenType !== "MOBILE"}>
              <Close className="w-4 mx-auto" />
            </When>
            <When value={screenType === "MOBILE"}>
              <span className="py-[2px] px-4  text-red rounded-md border-2 border-red text-sm">
                <u>{i18n("Words.remove")}</u>
              </span>
            </When>
          </div>
          <When value={!!type.startsWith("image/")}>
            <span
              className="bg-red py-1 md:py-0 px-4 md:px-0 text-white md:text-black rounded-md md:bg-transparent text-sm cursor-pointer"
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
