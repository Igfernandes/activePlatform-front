export type GalleryProps = {
  id: string;
  api: string;
};

export type GalleryDataResponse = {
  id: number;
  src: string;
  title: string;
};

export type GalleryResponse = GalleryDataResponse[];
