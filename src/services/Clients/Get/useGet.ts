import useGet from ".";
import { GetClientsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClients(request: GetClientsRequest = {}) {
  const { getClients } = useGet();

  async function handle() {
    const { data } = await getClients(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["clients", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
