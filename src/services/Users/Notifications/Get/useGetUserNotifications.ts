import useGet from ".";
import { GetNotificationsUserRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUserNotifications(
  request: GetNotificationsUserRequest = {}
) {
  const { getUserNotifications } = useGet();

  async function handle() {
    if (!request.id ) return [];
    
    const { data } = await getUserNotifications(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["notifications/users", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
