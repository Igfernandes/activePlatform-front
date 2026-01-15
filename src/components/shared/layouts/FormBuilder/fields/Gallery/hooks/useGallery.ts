import { useRef, useState } from "react";
import { GalleryFileShape } from "../type";
import { useModal } from "./useModal";
import { useFormContext } from "react-hook-form";

type Props = {
  IdCurrent: string;
  name: string;
};

export function useGallery({ IdCurrent, name }: Props) {
  const galleryRef = useRef<string>(IdCurrent);
  const { setValue } = useFormContext();
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
    setFilesUploaded((prev) => {
      return [...prev, ...files];
    });
    handleModal(false);
    if (setValue)
      setValue(
        name,
        JSON.stringify({
          package: galleryRef.current,
          files: [
            ...filesUploaded.map((file) => file.url),
            ...files.map((file) => file.url),
          ],
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
