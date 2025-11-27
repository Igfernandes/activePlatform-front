import useGet from ".";
import { GetInvitesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUsersInvite(request: GetInvitesRequest = {}) {
  const { getInvites } = useGet();

  async function handle() {
    const { data } = await getInvites(request);
    return data ?? null;
  }

  return useQueryGuard({
    queryKey: ["invites/users", request],
    queryFn: handle,
    enabled: true,
  });
}
