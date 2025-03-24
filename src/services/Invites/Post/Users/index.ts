import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostInviteUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostInviteUserService() {
  const { axios } = useAxios();
  const { inviteUser } = API_ROUTES;

  async function postInviteUser(payload: PostInviteUserPayload) {
    return axios.post(inviteUser, getPayloadJSON(payload));
  }

  return {
    postInviteUser,
  };
}
