import { useAxios } from "@hooks/useAxios";
import { PostAuthPayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";

export function usePostAuthService() {
  const { axios } = useAxios();
  const { auth } = authenticationRoutes;

  async function postAuth({ login, password }: PostAuthPayload) {
    return axios.post(
      auth,
      getPayloadJSON({
        login,
        password,
      })
    );
  }

  return {
    postAuth,
  };
}
