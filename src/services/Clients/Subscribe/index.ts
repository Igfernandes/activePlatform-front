import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostSubscribeClientPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostSubscribeClientsService() {
  const { axios } = useAxios();
  const { clientsSubscribe } = API_ROUTES;

  async function postSubscribeClient(payload: PostSubscribeClientPayload) {
    return axios.post(clientsSubscribe, getPayloadJSON(payload));
  }

  return {
    postSubscribeClient,
  };
}
