import { useAxios } from "@hooks/useAxios";
import { usersRoutes } from "@configs/routes/Api/users";
import { DeleteUserPayload } from "./type";

export function useDeleteUserService() {
  const { axios } = useAxios();
  const { users } = usersRoutes;

  async function deleteGroup({ id }: DeleteUserPayload) {
    return axios.delete(`${users}/${id}`);
  }

  return {
    deleteGroup,
  };
}
