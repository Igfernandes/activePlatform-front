import { Dispatch, RefObject, SetStateAction } from "react";
import { GalleryFileShape } from "../type";

export type GalleryModalProps = {
  isShow: boolean;
  files: Array<GalleryFileShape>;
  handleModal: (isShow: boolean) => void;
  galleryRef: RefObject<string>;
  handleUpdateFilesUploaded: (files: GalleryFileShape[]) => void;
};

export type HookUploadProps = {
  files: Array<GalleryFileShape>;
  galleryRef: RefObject<string>;
  handleUpdateFilesUploaded: (files: GalleryFileShape[]) => void;
  setFiles: Dispatch<SetStateAction<GalleryFileShape[]>>;
  handleModal: (isShow: boolean) => void;
};

export type FileItemProps = {
  id: number;
  file: GalleryFileShape;
  setPreview: Dispatch<SetStateAction<string | undefined>>;
  handleDelete: (fileIndex: number) => void;
};
