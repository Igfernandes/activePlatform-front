import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetNotificationsRequest } from "./types";

export default function useGetNotifications(
  request: GetNotificationsRequest = {}
) {
  const { getNotifications } = useGet();

  async function handle() {
    const { data } = await getNotifications(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["notifications", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
