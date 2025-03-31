import { useAxios } from "@hooks/useAxios";
import { DeleteUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteUserService() {
  const { axios } = useAxios();
  const { users } = API_ROUTES;

  async function deleteUsers({ id }: DeleteUserPayload) {
    return axios.delete(`${users}/${id}`);
  }

  return {
    deleteUsers,
  };
}
