import { ChangeEvent, useState } from "react";
import { GalleryFileShape } from "../type";
import { useI18n } from "@contexts/I18n";

const MAX_FILE_SIZE_MB = 5; // limite por arquivo
const MAX_TOTAL_SIZE_MB = 20; // limite total

export function useChangeFile() {
  const { t } = useI18n();
  const [files, setFiles] = useState<Array<GalleryFileShape>>([]);

  const handleDelete = (fileIndex: number) => {
    setFiles((files) => {
      return files.filter((file, key) => key !== fileIndex);
    });
  };

  const handleDeleteAll = () => {
    setFiles([]);
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const changeFiles = e.currentTarget.files;
    if (!changeFiles) return;

    const maxFileSize = MAX_FILE_SIZE_MB * 1024 * 1024;
    const maxTotalSize = MAX_TOTAL_SIZE_MB * 1024 * 1024;

    const currentTotalSize = files.reduce(
      (acc, file) => acc + file.ref.size,
      0
    );

    const newFiles = Array.from(changeFiles);

    for (const file of newFiles) {
      if (file.size > maxFileSize) {
        alert(
          t("Validations.file_size_exceeded", {
            name: file.name,
            size: MAX_FILE_SIZE_MB,
          })
        );
        return;
      }
    }

    const newFilesTotalSize = newFiles.reduce(
      (acc, file) => acc + file.size,
      0
    );
    if (currentTotalSize + newFilesTotalSize > maxTotalSize) {
      alert(
        t("Validations.file_total_size_exceeded", {
          size: MAX_TOTAL_SIZE_MB,
        })
      );
      return;
    }

    const galleryFiles = newFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
      ref: file,
      status: "AWAITING",
    })) as Array<GalleryFileShape>;

    const updatedFiles = [...files, ...galleryFiles];
    setFiles(updatedFiles);
  };

  return {
    files,
    handleChangeFile,
    handleDelete,
    handleDeleteAll,
    setFiles,
  };
}
