import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateClientPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostClientsService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function postCreateClient(payload: PostCreateClientPayload) {
    return axios.post(clients, getPayloadJSON(payload));
  }

  return {
    postCreateClient,
  };
}
