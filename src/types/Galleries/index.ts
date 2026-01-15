import { GalleryPhotoShape } from "./photo";

export type GalleryShape = {
  id: number;
  title: string;
  cover?: string;
  status: "PUBLISHED" | "DRAFT";
  images: Array<GalleryPhotoShape>;
  created_at: string;
  updated_at: string;
};
