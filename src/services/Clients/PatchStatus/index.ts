import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchClientsStatusPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePatchClientsStatusService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function patchClientsStatus(payload: PatchClientsStatusPayload) {
    return axios.patch(
      clients,
      getPayloadJSON({
        path: "status",
        data: payload,
      })
    );
  }

  return {
    patchClientsStatus,
  };
}
