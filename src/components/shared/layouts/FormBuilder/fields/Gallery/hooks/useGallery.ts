import { useRef, useState } from "react";
import { GalleryFileShape } from "../type";
import { SetValue } from "../../../type";
import { useModal } from "./useModal";

type Props = {
  setValue?: SetValue;
  IdCurrent: string;
  name: string;
};

export function useGallery({ IdCurrent, setValue, name }: Props) {
  const galleryRef = useRef<string>(IdCurrent);
  const { handleModal, isShowModal } = useModal();
  const [filesUploaded, setFilesUploaded] = useState<Array<GalleryFileShape>>(
    []
  );

  const handleDeleteFile = (fileIndex: number) => {
    setFilesUploaded((files) => {
      return files.filter((file, key) => fileIndex !== key);
    });
    if (setValue)
      setValue(
        name,
        JSON.stringify({
          package: galleryRef.current,
          files: filesUploaded
            .filter((file, key) => fileIndex !== key)
            .map((file) => file.url),
        })
      );
  };

  const handleUpdateFilesUploaded = (files: Array<GalleryFileShape>) => {
    setFilesUploaded(files);
    handleModal(false);
    if (setValue)
      setValue(
        name,
        JSON.stringify({
          package: galleryRef.current,
          files: files.map((file) => file.url),
        })
      );
  };

  return {
    galleryRef,
    filesUploaded,
    isShowModal,
    handleModal,
    handleUpdateFilesUploaded,
    handleDeleteFile,
  };
}
