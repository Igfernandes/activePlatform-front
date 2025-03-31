import { useAxios } from "@hooks/useAxios";
import { DeleteServicePayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteServicesService() {
  const { axios } = useAxios();
  const { services } = API_ROUTES;

  async function deleteService({ id }: DeleteServicePayload) {
    return axios.delete(`${services}/${id}`);
  }

  return {
    deleteService,
  };
}
