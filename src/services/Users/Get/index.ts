import { API_ROUTES } from "@configs/routes/Api/api";
import { GetUsersRequest, GetUserRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { UsersShape } from "../../../types/Users/Users";

export default function useGet() {
  const { users } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getUsers(request?: GetUsersRequest) {
    const { ...query } = request ?? {};
    return await axios.get<UsersShape[]>(
      setQueries({
        url: setParams({ url: users, data: { id: "" } }),
        query,
      })
    );
  }

  async function getUser(request?: GetUserRequest) {
    return axios.get<UsersShape>(
      setParams({
        url: setQueries({
          url: setParams({ url: users, data: { id: request?.id } }),
        }),
      })
    );
  }

  return {
    getUsers,
    getUser,
  };
}
