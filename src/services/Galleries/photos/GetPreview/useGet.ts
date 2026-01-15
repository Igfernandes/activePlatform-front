import { GalleryPhotoShape } from "@type/Galleries/photo";
import useGet from ".";
import { GetGalleriesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetGalleriesPhotoPreview(
  request: GetGalleriesRequest = {} as GetGalleriesRequest
) {
  const { getGalleries } = useGet();
  async function handle() {
    const { data } = await getGalleries(request);
    return data ?? null;
  }

  const { data } = useQueryGuard({
    queryKey: ["galleries", request],
    queryFn: handle,
    enabled: true,
  });

  return data ?? [] as GalleryPhotoShape[];
}
