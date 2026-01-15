import { GalleryShape } from "@type/Galleries";

export type PostGalleryPayload = Omit<
  GalleryShape,
  "id" | "images" | "updated_at" | "created_at"
> & {
  id?: number;
};
