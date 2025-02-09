import { useAxios } from "@hooks/useAxios";
import { PostAuthPayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";

export function usePostAuthService() {
  const { axios } = useAxios();
  const { auth } = authenticationRoutes;

  async function postAuth({ login, password, rememberMe }: PostAuthPayload) {
    const payload = {
      login,
      password,
      rememberMe: rememberMe,
    };

    if (!rememberMe) {
      delete payload["rememberMe"];
    }

    return axios.post(auth, getPayloadJSON(payload));
  }

  return {
    postAuth,
  };
}
