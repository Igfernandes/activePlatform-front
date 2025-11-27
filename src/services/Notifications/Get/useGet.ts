import useGet from ".";
import { GetNotificationsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetNotifications(
  request: GetNotificationsRequest = {}
) {
  const { getNotifications } = useGet();

  async function handle() {
    const { data } = await getNotifications(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["notifications", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
