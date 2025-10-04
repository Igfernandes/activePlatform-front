import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetClientsEventRequest } from "./types";

export default function useGetClientsEvents(request: GetClientsEventRequest) {
  const { getClients } = useGet();

  async function handle() {
    const { data } = await getClients(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["clients/events", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
