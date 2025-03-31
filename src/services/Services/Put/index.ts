import { useAxios } from "@hooks/useAxios";
import { getPayloadFormData } from "@helpers/payload";
import { PutServicesPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePutServicesService() {
  const { axios } = useAxios();
  const { services } = API_ROUTES;

  async function putServices(payload: PutServicesPayload) {
    if (Array.isArray(payload.photo) && payload.photo.length > 0)
      payload["photo"] = payload.photo[0];
    else delete payload["photo"];

    return axios.put(services, getPayloadFormData(payload));
  }

  return {
    putServices,
  };
}
