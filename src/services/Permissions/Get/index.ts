import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { PermissionsShape } from "../../../types/Permissions/Permissions";
import { GetPermissionsRequest } from "./types";

export default function useGet() {
  const { permissions } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getPermissions(request?: GetPermissionsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<PermissionsShape[]>(
      setQueries({
        url: setParams({ url: permissions }),
        query,
      })
    );
  }

  return {
    getPermissions,
  };
}
