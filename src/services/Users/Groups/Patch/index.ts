import { useAxios } from "@hooks/useAxios";
import { usersRoutes } from "@configs/routes/Api/users";
import { PatchGroupPayload } from "./type";

export function usePatchGroupService() {
  const { axios } = useAxios();
  const { groups } = usersRoutes;

  async function patchGroup({ id }: PatchGroupPayload) {
    return axios.patch(`${groups}/${id}`);
  }

  return {
    patchGroup,
  };
}
