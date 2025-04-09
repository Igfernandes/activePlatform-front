import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateUsersPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostUsersService() {
  const { axios } = useAxios();
  const { users } = API_ROUTES;

  async function postCreateUsers(payload: PostCreateUsersPayload) {
    return axios.post(users, getPayloadJSON(payload));
  }

  return {
    postCreateUsers,
  };
}
