import useGet from ".";
import { GetPermissionsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetPermissions(request: GetPermissionsRequest = {}) {
  const { getPermissions } = useGet();

  async function handle() {
    const { data } = await getPermissions(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["permissions", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
