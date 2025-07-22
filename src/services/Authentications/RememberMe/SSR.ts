import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { PostRememberMePayload, PostRememberMeResponse } from "./type";
import { axios } from "@configs/axios";
import { getPayloadJSON } from "@helpers/payload";

export async function postRememberMe({
  referenceToken,
}: PostRememberMePayload): Promise<PostRememberMeResponse> {
  const { rememberMe } = authenticationRoutes;

  const { data } = await axios.post(
    rememberMe,
    getPayloadJSON({
      "reference-token": referenceToken,
    })
  );

  return data;
}
