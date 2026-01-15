import { JSX } from "react";
import { GalleryShape } from "@type/Galleries";

export type HookGalleriesProps<GalleryType> = {
  filter: string;
  handleFilter: (data: GalleryType) => boolean;
};

export type TDataGallery = Pick<GalleryShape,  "title" > & {
  id: string | JSX.Element;
  status: string
  created_at: string | JSX.Element;
  actions: JSX.Element;
};

export type GalleriesStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalGalleryOperationType = "CREATE" | "DELETE" | boolean;

export type GalleryPageProps = {
  targetGallery: GalleryShape;
};
export type ProfileManagerProps = {
  gallery: GalleryShape;
};

export type DeleteGalleryPayload = {
  gallery_id?: number;
  all?: boolean;
  in_galleries?: Array<number>;
};
