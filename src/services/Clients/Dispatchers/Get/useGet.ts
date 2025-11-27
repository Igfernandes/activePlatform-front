import useGet from ".";
import { GetClientsDispatchersRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClientsDispatchers(
  request: GetClientsDispatchersRequest = {}
) {
  const { getClientsDispatchers } = useGet();

  async function handle() {
    const { data } = await getClientsDispatchers(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["clients/dispatchers"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
