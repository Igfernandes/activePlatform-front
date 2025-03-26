import { useAxios } from "@hooks/useAxios";
import { getPayloadFormData } from "@helpers/payload";
import { PostCreateServicesPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostServicesService() {
  const { axios } = useAxios();
  const { services } = API_ROUTES;

  async function postCreateServices(payload: PostCreateServicesPayload) {
    if (Array.isArray(payload.photo) && payload.photo.length > 0)
      payload["photo"] = payload.photo[0];
    else delete payload["photo"];

    return axios.post(services, getPayloadFormData(payload));
  }

  return {
    postCreateServices,
  };
}
