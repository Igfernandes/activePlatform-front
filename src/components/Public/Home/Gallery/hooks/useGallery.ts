import useGetGalleriesPhotoPreview from "@services/Galleries/photos/GetPreview/useGet";
import { useMemo } from "react";

export function useGallery() {
  const rows = useGetGalleriesPhotoPreview({
    limit: 3,
  });
  const photos = useMemo(() => rows, [rows]);

  return {
    photos,
  };
}
