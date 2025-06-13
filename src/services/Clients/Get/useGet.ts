import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetClientsRequest } from "./types";

export default function useGetClients(request: GetClientsRequest = {}) {
  const { getClients } = useGet();

  async function handle() {
    const { data } = await getClients(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["clients", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
