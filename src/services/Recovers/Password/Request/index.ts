import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { recoverRoutes } from "@configs/routes/Api/recover";

export function usePostRecoverPasswordRequestService() {
  const { axios } = useAxios();
  const { recoverPassword } = recoverRoutes;

  async function postRecoverPasswordRequest(
    payload: PostRecoverPasswordPayload
  ) {
    return axios.post(recoverPassword, getPayloadJSON(payload));
  }

  return {
    postRecoverPasswordRequest,
  };
}
