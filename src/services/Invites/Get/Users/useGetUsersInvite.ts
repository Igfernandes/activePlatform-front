import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetInvitesRequest } from "./types";

export default function useGetUsersInvite(request: GetInvitesRequest = {}) {
  const { getInvites } = useGet();

  async function handle() {
    const { data } = await getInvites(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["invites/users", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
