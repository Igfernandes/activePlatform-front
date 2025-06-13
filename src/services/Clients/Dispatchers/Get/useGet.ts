import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetClientsDispatchersRequest } from "./types";

export default function useGetClientsDispatchers(
  request: GetClientsDispatchersRequest = {}
) {
  const { getClientsDispatchers } = useGet();

  async function handle() {
    const { data } = await getClientsDispatchers(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["clients/dispatchers"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
