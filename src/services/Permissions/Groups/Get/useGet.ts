import { GetGroupsPermissionsRequest } from "./types";
import useGetGroupsPermissionsService from ".";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetGroupsPermissions(
  request: GetGroupsPermissionsRequest = {}
) {
  const { getGroupsPermissions } = useGetGroupsPermissionsService();

  async function handle() {
    const { data } = await getGroupsPermissions(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["permissions/groups", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
