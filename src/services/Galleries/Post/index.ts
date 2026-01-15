import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostGalleryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostGalleryPayload() {
  const { axios } = useAxios();
  const { galleries } = API_ROUTES;

  async function postCreateGallery(payload: PostGalleryPayload) {
    return axios.post(galleries, getPayloadJSON(payload));
  }

  return {
    postCreateGallery,
  };
}
