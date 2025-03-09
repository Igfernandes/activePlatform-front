import { PostRememberMePayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";
import { useAxios } from "@hooks/useAxios";

export function usePostRememberMeService() {
  const { rememberMe } = authenticationRoutes;
  const { axios } = useAxios();

  async function postRememberMe({ referenceToken }: PostRememberMePayload) {
    return axios.post(
      rememberMe,
      getPayloadJSON({
        "reference-token": referenceToken,
      })
    );
  }

  return {
    postRememberMe,
  };
}
