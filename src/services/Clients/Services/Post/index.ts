import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostClientsServicesPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostClientsServicesService() {
  const { axios } = useAxios();
  const { clientsServices } = API_ROUTES;
  const { setParams } = useRoutes();

  async function post({ serviceId, ...payload }: PostClientsServicesPayload) {
    return axios.post(
      setParams({
        url: clientsServices,
        data: {
          id: "",
          serviceId,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    post,
  };
}
