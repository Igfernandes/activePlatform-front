import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostConfirmationsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostConfirmationService() {
  const { axios } = useAxios();
  const { confirmations } = API_ROUTES;

  async function postConfirmations(payload: PostConfirmationsPayload) {
    return axios.post(confirmations, getPayloadJSON(payload));
  }

  return {
    postConfirmations,
  };
}
