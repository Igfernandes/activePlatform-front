import { useAxios } from "@hooks/useAxios";
import { ResendInviteUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useResendInviteUserService() {
  const { axios } = useAxios();
  const { inviteUserResend } = API_ROUTES;
  const { setParams } = useRoutes();

  async function resendInvite({ id }: ResendInviteUserPayload) {
    return axios.post(
      setParams({
        url: inviteUserResend,
        data: {
          id,
        },
      })
    );
  }

  return {
    resendInvite,
  };
}
