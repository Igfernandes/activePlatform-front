import { GalleryFileShape } from "../type";
import i18n from "@configs/i18n";
import { FileItem } from "./FileItem";
import { Dispatch, SetStateAction } from "react";

type Props = {
  files: GalleryFileShape[];
  setPreview: Dispatch<SetStateAction<string | undefined>>;
  handleDelete: (fileIndex: number) => void;
};

export function FileList({ files, setPreview, handleDelete }: Props) {
  return (
    <div className="mt-4">
      <div className="text-right">
        <span className="text-xs ">
          <u>{`${files.length} ${i18n("Words.attachment")}`} </u>
        </span>
      </div>
      <ul className="flex max-h-[26vh] overflow-y-auto flex-wrap">
        {Array.from(files ?? []).map((file: GalleryFileShape, key: number) => (
          <FileItem
            id={key}
            setPreview={setPreview}
            file={file}
            handleDelete={handleDelete}
            key={`gallery_file_upload_${key}`}
          />
        ))}
      </ul>
    </div>
  );
}
