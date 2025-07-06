import { ChangeEvent, useRef, useState } from "react";
import { GalleryFileShape } from "../type";
import { SetValue } from "../../../type";

type Props = {
  setValue?: SetValue;
  inputName: string;
};

export function useGallery({ setValue, inputName }: Props) {
  const fileRef = useRef<Array<GalleryFileShape>>([]);
  const [files, setFiles] = useState<Array<GalleryFileShape>>([]);

  const handleDelete = (name: string) => {
    const updatedFiles = fileRef.current.filter((file) => file.name !== name);
    fileRef.current = updatedFiles;
    setFiles(updatedFiles);
    updateValue(updatedFiles);
  };

  const updateValue = (files: Array<GalleryFileShape>) => {
    if (!setValue) return;

    setValue(
      inputName,
      files.map((file) => file.ref)
    );
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const changeFiles = e.currentTarget.files;
    if (!changeFiles) return;

    const newFiles = Array.from(changeFiles).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
      ref: file,
      handleDelete,
    }));

    const updatedFiles = [...fileRef.current, ...newFiles];
    fileRef.current = updatedFiles;
    setFiles(updatedFiles);

    updateValue(updatedFiles);
  };

  return {
    files,
    handleChangeFile,
    handleDelete,
  };
}
