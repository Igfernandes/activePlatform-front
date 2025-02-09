import { useAxios } from "@hooks/useAxios";
import { PostRememberMePayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";

export function usePostRememberMeService() {
  const { axios } = useAxios();
  const { rememberMe } = authenticationRoutes;

  async function postRememberMe({ referenceToken }: PostRememberMePayload) {
    console.log(referenceToken)
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
