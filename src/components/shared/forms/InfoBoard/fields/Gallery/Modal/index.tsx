import { Modal } from "@components/shared/layouts/Modal";
import { useUpload } from "../hooks/useUpload";
import i18n from "@configs/i18n";
import { useEffect, useState } from "react";
import { BoardChanges } from "./BoardChanges";
import { FileList } from "./FileList";
import { GalleryModalProps } from "./type";
import { useChangeFile } from "../hooks/useChangeFile";

export function UploadModal({
  handleModal,
  isShow,
  galleryRef,
  files: filesUploaded,
  handleUpdateFilesUploaded,
}: GalleryModalProps) {
  const { files, handleChangeFile, handleDeleteAll, setFiles, handleDelete } =
    useChangeFile();
  const { handleUploadFiles, isLoading } = useUpload({
    galleryRef,
    handleUpdateFilesUploaded,
    files,
    handleModal,
    setFiles,
  });

  useEffect(() => {
    setFiles(filesUploaded);
  }, [filesUploaded]);

  const [preview, setPreview] = useState<string>();

  return (
    <Modal
      title={i18n("Components.gallery.modal_title")}
      handleModal={handleModal}
      isShowModal={isShow}
    >
      <div className="w-full lg:w-[33vw]">
        <div className="mb-2">
          <span className="text-disabled text-xs">
            {i18n("Components.gallery.modal_text")}
          </span>
        </div>
        <BoardChanges
          handleChangeFile={handleChangeFile}
          preview={preview}
          setPreview={setPreview}
        />
        <FileList
          files={files}
          handleDelete={handleDelete}
          setPreview={setPreview}
        />
      </div>
      <div className="flex text-center mt-5">
        <button
          type="button"
          onClick={() => {
            handleModal(false);
            handleDeleteAll();
          }}
          className="w-1/2 block hover:scale-95 duration-300 border-red text-red border-2  py-2 rounded-md cursor-pointer mr-2"
        >
          {i18n("Words.cancel")}
        </button>
        <button
          type="button"
          disabled={isLoading}
          onClick={handleUploadFiles}
          className="w-1/2 bg-red text-white disabled:bg-disabled hover:scale-95 duration-300 py-2 md:px-16 rounded-md cursor-pointer ml-2"
        >
          {i18n(`Words.${isLoading ? "loading" : "save"}`)}
        </button>
      </div>
    </Modal>
  );
}
