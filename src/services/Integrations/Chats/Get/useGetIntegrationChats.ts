import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetIntegrationsChatsRequest } from "./types";

export default function useGetIntegrationChats({
  type,
  ...request
}: GetIntegrationsChatsRequest = {}) {
  const { getIntegrationChats } = useGet();

  async function handle() {
    const { data } = await getIntegrationChats({ type, ...request });
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["integration/chats", { type }],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
