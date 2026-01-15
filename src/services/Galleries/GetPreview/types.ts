import { GalleryShape } from "@type/Galleries";
import { GetRequestShape } from "@type/service";

export type GetGalleriesRequest = GetRequestShape & {
  id?: number;
};
export type GetGalleriesResponse = {
  rows: GalleryShape[];
  count: number;
};
