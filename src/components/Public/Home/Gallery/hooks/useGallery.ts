import useGetGalleriesPhotoPreview from "@services/Galleries/photos/GetPreview/useGet";
import { useMemo } from "react";

export function useGallery() {
  const rows = useGetGalleriesPhotoPreview();
  const photos = useMemo(() => rows, [rows]);

  return {
    photos,
  };
}
