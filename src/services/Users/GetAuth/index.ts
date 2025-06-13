import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { UsersShape } from "../../../types/Users";

export default function useGetAuth() {
  const { users } = API_ROUTES;
  const { axios } = useAxios();

  async function getUser() {
    return axios.get<UsersShape>(`${users}/?current=true`);
  }

  return {
    getUser,
  };
}
