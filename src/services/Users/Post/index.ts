import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateUserPayload } from "./type";
import { usersRoutes } from "@configs/routes/Api/users";

export function usePostCreateUserService() {
  const { axios } = useAxios();
  const { users } = usersRoutes;

  async function postCreateUser(payload: PostCreateUserPayload) {
    return axios.post(users, getPayloadJSON(payload));
  }

  return {
    postCreateUser,
  };
}
