import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetGroupsPermissionsRequest } from "./types";
import { GroupsPermissionsShape } from "../../../../types/Permissions/GroupsPermissions";

export default function useGetGroupsPermissionsService() {
  const { permissionsGroup } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getGroupsPermissions(request?: GetGroupsPermissionsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GroupsPermissionsShape[]>(
      setQueries({
        url: setParams({
          url: permissionsGroup,
          data: {
            groupId: request?.id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getGroupsPermissions,
  };
}
