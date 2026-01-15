import { GalleryPhotoShape } from "@type/Galleries/photo";
import { GetRequestShape } from "@type/service";

export type GetGalleriesRequest = GetRequestShape & {
  id?: number;
};
export type GetGalleriesResponse = GalleryPhotoShape[];
