import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordAlterPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { recoverRoutes } from "@configs/routes/Api/recover";

export function usePostRecoverPasswordAlterService() {
  const { axios } = useAxios();
  const { recoverPassword } = recoverRoutes;

  async function postRecoverPasswordAlter(
    payload: PostRecoverPasswordAlterPayload
  ) {
    return axios.post(recoverPassword, getPayloadJSON(payload));
  }

  return {
    postRecoverPasswordAlter,
  };
}
