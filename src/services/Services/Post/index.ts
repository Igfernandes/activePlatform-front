import { useAxios } from "@hooks/useAxios";
import { getPayloadFormData } from "@helpers/payload";
import { PostCreateServicesPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostServicesService() {
  const { axios } = useAxios();
  const { services } = API_ROUTES;

  async function postCreateServices({
    photo,
    ...payload
  }: PostCreateServicesPayload) {
    return axios.post(
      services,
      getPayloadFormData({
        ...payload,
        photo: photo[0],
      })
    );
  }

  return {
    postCreateServices,
  };
}
