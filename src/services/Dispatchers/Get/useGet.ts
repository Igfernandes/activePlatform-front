import useGet from ".";
import { GetMessagesDispatcherRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetMessagesDispatcher(
  request: GetMessagesDispatcherRequest = {}
) {
  const { getMessagesDispatcher } = useGet();

  async function handle() {
    const { data } = await getMessagesDispatcher(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["messages-dispatcher", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
