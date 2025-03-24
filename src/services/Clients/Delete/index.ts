import { useAxios } from "@hooks/useAxios";
import { DeleteClientPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";

export function useDeleteClientsService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function deleteClient(payload: DeleteClientPayload) {
    return axios.delete(`${clients}/${payload.client_id ?? ""}`, {
      data: getPayloadJSON(payload),
    });
  }

  return {
    deleteClient,
  };
}
