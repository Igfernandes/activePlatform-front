import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetPermissionsRequest } from "./types";

export default function useGetPermissions(request: GetPermissionsRequest = {}) {
  const { getPermissions } = useGet();

  async function handle() {
    const { data } = await getPermissions(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["permissions", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
