import { useQuery } from "@tanstack/react-query";

import { GetGroupsPermissionsRequest } from "./types";
import useGetGroupsPermissionsService from ".";

export default function useGetGroupsPermissions(
  request: GetGroupsPermissionsRequest = {}
) {
  const { getGroupsPermissions } = useGetGroupsPermissionsService();

  async function handle() {
    const { data } = await getGroupsPermissions(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["permissions/groups", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
