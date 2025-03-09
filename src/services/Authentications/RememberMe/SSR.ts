import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { PostRememberMePayload } from "./type";
import { axios } from "@configs/axios";
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
