import { useAxios } from "@hooks/useAxios";
import { DeleteGalleryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteGalleryService() {
  const { axios } = useAxios();
  const { galleriesById } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteGallery({
    gallery_id,
    ...payload
  }: DeleteGalleryPayload) {
    return axios.delete(
      setParams({
        url: galleriesById,
        data: {
          id: gallery_id ?? "",
        },
      }),
      {
        data: getPayloadJSON(payload),
      }
    );
  }

  return {
    deleteGallery,
  };
}
