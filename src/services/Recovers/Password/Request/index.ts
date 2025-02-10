import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { recoverRoutes } from "@configs/routes/Api/recover";

export function usePostRecoverPasswordRequestService() {
  const { axios } = useAxios();
  const { recoverPasswordRequest } = recoverRoutes;

  async function postRecoverPasswordRequest(
    payload: PostRecoverPasswordPayload
  ) {
    return axios.post(recoverPasswordRequest, getPayloadJSON(payload));
  }

  return {
    postRecoverPasswordRequest,
  };
}
