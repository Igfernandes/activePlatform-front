import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetMessagesDispatcherRequest } from "./types";

export default function useGetMessagesDispatcher(
  request: GetMessagesDispatcherRequest = {}
) {
  const { getMessagesDispatcher } = useGet();

  async function handle() {
    const { data } = await getMessagesDispatcher(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["messages-dispatcher", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
