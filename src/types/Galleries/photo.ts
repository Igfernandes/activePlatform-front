import { BaseShape } from "@type/data";

export type GalleryPhotoShape = BaseShape & {
  id: number;
  src: string;
  gallery_id: number;
  created_at: string;
};
