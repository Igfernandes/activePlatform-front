import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutCreateGroupPayload } from "./type";
import { usersRoutes } from "@configs/routes/Api/users";

export function usePutCreateGroupService() {
  const { axios } = useAxios();
  const { groups } = usersRoutes;

  async function putCreateGroup({ id, ...payload }: PutCreateGroupPayload) {
    return axios.put(`${groups}/${id}`, getPayloadJSON(payload));
  }

  return {
    putCreateGroup,
  };
}
