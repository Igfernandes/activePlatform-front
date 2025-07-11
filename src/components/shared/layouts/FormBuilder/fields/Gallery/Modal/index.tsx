import { Modal } from "@components/shared/layouts/Modal";
import { GalleryFileShape } from "../type";
import { useUpload } from "../hooks/useUpload";
import i18n from "@configs/i18n";
import { Upload } from "@assets/Icons/black/Upload";
import { When } from "@components/utilities/When";
import { ImageSimple } from "@assets/Icons/black/ImageSimple";
import { FileSimple } from "@assets/Icons/black/FileSimple";
import { useStrings } from "@hooks/useStrings";
import { Close } from "@assets/Icons/black/CloseClean";
import Link from "next/link";

type Props = {
  isShow: boolean;
  handleModal: (isShow: boolean) => void;
};

export function UploadModal({ handleModal, isShow }: Props) {
  const { files, handleChangeFile, handleDelete } = useUpload();
  const { getClampString } = useStrings();

  return (
    <Modal
      title={i18n("Components.gallery.modal_title")}
      handleModal={handleModal}
      isShowModal={isShow}
    >
      <div className="w-[33vw]">
        <div className="mb-2">
          <span className="text-disabled text-sm">
            {i18n("Components.gallery.modal_text")}
          </span>
        </div>
        <div className="relative px-4 border-dashed border-2 rounded-lg">
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
        <div className="mt-4">
          <div className="text-right">
            <span className="text-xs ">
              <u>{`${files.length} ${i18n("Words.attachment")}`} </u>
            </span>
          </div>
          <ul className="flex max-h-[26vh] overflow-y-auto flex-wrap ">
            {Array.from(files ?? []).map(
              (file: GalleryFileShape, key: number) => (
                <li
                  className="border-2 py-3 px-2 rounded-md w-full mt-2"
                  key={`gallery_file_upload_${key}`}
                >
                  <div className="flex">
                    <div className="py-2 px-3">
                      <When value={!!file.type.startsWith("image/")}>
                        <ImageSimple />
                      </When>
                      <When value={!!file.type.startsWith("application/")}>
                        <FileSimple />
                      </When>
                    </div>
                    <div>
                      <p className="text-sm">{getClampString(file.name, 40)}</p>
                      <p className="text-xs">{bytesToMB(file.ref.size)}</p>
                    </div>
                    <div className="text-center ml-auto">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDelete(file.name)}
                      >
                        <Close className="w-4 mx-auto" />
                      </span>
                      <Link href={getFilePreviewUrl(file.ref)} target="_blank">
                        <span className="text-sm cursor-pointer">
                          <u>{i18n("Words.see")}</u>
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="flex text-center mt-5">
        <span className="w-1/2 block hover:scale-95 duration-300 border-red text-red border-2  py-2 rounded-md cursor-pointer mr-2">
          {i18n("Words.cancel")}
        </span>
        <span className="w-1/2 bg-red text-white hover:scale-95 duration-300 py-2 px-16 rounded-md cursor-pointer ml-2">
          {i18n("Words.save")}
        </span>
      </div>
    </Modal>
  );
}
function bytesToMB(bytes: number, decimalPlaces: number = 4): string {
  if (bytes === 0) return "0 MB";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(decimalPlaces)} MB`;
}
export function getFilePreviewUrl(file: File): string {
    console.log(URL.createObjectURL(file))
  return URL.createObjectURL(file);
}
