import { API_ROUTES } from "@configs/routes/Api/api";
import { GetGroupsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { UsersGroupShape } from "../../../../types/Users/UsersGroup";

export default function useGet() {
  const { groups } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getGroups(request?: GetGroupsRequest) {
    const { ...query } = request ?? {};

    return await axios.get<UsersGroupShape[]>(
      setQueries({
        url: setParams({ url: groups }),
        query,
      })
    );
  }

  return {
    getGroups,
  };
}
