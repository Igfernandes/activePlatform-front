import { axios } from "@hooks/useAxios";
import { PostRememberMePayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";
import { STATUS_SERVICE } from "@constants/services";

export async function postRememberMe({
  referenceToken,
}: PostRememberMePayload): Promise<boolean> {
  const { rememberMe } = authenticationRoutes;

  const { status } = await axios.post(
    rememberMe,
    getPayloadJSON({
      "reference-token": referenceToken,
    })
  );

  return status == STATUS_SERVICE.OK;
}

export function usePostRememberMeService() {
  const { rememberMe } = authenticationRoutes;

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
