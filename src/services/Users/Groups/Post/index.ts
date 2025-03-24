import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateGroupPayload } from "./type";
import { usersRoutes } from "@configs/routes/Api/users";

export function usePostCreateGroupService() {
  const { axios } = useAxios();
  const { groups } = usersRoutes;

  async function postCreateGroup(payload: PostCreateGroupPayload) {
    return axios.post(groups, getPayloadJSON(payload));
  }

  return {
    postCreateGroup,
  };
}
