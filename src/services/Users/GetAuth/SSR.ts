import { API_ROUTES } from "@configs/routes/Api/api";
import { UsersShape } from "../../../types/Users/Users";
import { axios } from "@configs/axios";

export async function getUserAuth(token_navigation: string) {
  return axios.get<UsersShape>(`${API_ROUTES.users}?current=true`, {
    headers: {
      'Authorization': `Bearer ${token_navigation}`
    }
  });
}
