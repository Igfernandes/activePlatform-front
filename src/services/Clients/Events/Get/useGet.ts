import useGet from ".";
import { GetClientsEventRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClientsEvents(request: GetClientsEventRequest) {
  const { getClients } = useGet();

  async function handle() {
    const { data } = await getClients(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["clients/events", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
