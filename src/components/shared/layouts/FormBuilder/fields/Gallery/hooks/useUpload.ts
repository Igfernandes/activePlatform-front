import { ChangeEvent, useRef, useState } from "react";
import { GalleryFileShape } from "../type";

const MAX_FILE_SIZE_MB = 5; // limite por arquivo
const MAX_TOTAL_SIZE_MB = 20; // limite total

export function useUpload() {
  const fileRef = useRef<Array<GalleryFileShape>>([]);
  const [files, setFiles] = useState<Array<GalleryFileShape>>([]);

  const handleDelete = (name: string) => {
    const updatedFiles = fileRef.current.filter((file) => file.name !== name);
    fileRef.current = updatedFiles;
    setFiles(updatedFiles);
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const changeFiles = e.currentTarget.files;
    if (!changeFiles) return;

    const maxFileSize = MAX_FILE_SIZE_MB * 1024 * 1024;
    const maxTotalSize = MAX_TOTAL_SIZE_MB * 1024 * 1024;

    const currentTotalSize = fileRef.current.reduce(
      (acc, file) => acc + file.ref.size,
      0
    );

    const newFiles = Array.from(changeFiles);

    for (const file of newFiles) {
      if (file.size > maxFileSize) {
        alert(`O arquivo "${file.name}" excede ${MAX_FILE_SIZE_MB}MB.`);
        return;
      }
    }

    const newFilesTotalSize = newFiles.reduce(
      (acc, file) => acc + file.size,
      0
    );
    if (currentTotalSize + newFilesTotalSize > maxTotalSize) {
      alert(`O total de arquivos excede ${MAX_TOTAL_SIZE_MB}MB.`);
      return;
    }

    const galleryFiles = newFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
      ref: file,
      handleDelete,
    }));

    const updatedFiles = [...fileRef.current, ...galleryFiles];
    fileRef.current = updatedFiles;
    setFiles(updatedFiles);
  };

  return {
    files,
    handleChangeFile,
    handleDelete,
  };
}
