import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { UsersShape } from "../../../types/Users/Users";

export default function useGetAuth() {
  const { users } = API_ROUTES;
  const { axios } = useAxios();

  async function getUser(tokenNavigation: string) {
    return axios.get<UsersShape>(`${users}/?current=true`, {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    });
  }

  return {
    getUser,
  };
}
