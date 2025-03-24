import { useAxios } from "@hooks/useAxios";
import { usersRoutes } from "@configs/routes/Api/users";
import { DeleteGroupPayload } from "./type";

export function useDeleteGroupService() {
  const { axios } = useAxios();
  const { groups } = usersRoutes;

  async function deleteGroup({ id }: DeleteGroupPayload) {
    return axios.delete(`${groups}/${id}`);
  }

  return {
    deleteGroup,
  };
}
