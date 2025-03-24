import { useAxios } from "@hooks/useAxios";
import { ResendInviteUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useResendInviteUserService() {
  const { axios } = useAxios();
  const { inviteUserResend } = API_ROUTES;

  async function resendInvite({ id }: ResendInviteUserPayload) {
    return axios.post(`${inviteUserResend}/${id}`);
  }

  return {
    resendInvite,
  };
}
