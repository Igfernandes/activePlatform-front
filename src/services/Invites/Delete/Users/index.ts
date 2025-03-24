import { useAxios } from "@hooks/useAxios";
import { DeleteInviteUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteInviteUserService() {
  const { axios } = useAxios();
  const { inviteUserResend } = API_ROUTES;

  async function deleteInvite({ id }: DeleteInviteUserPayload) {
    return axios.delete(`${inviteUserResend}/${id}`);
  }

  return {
    deleteInvite,
  };
}
