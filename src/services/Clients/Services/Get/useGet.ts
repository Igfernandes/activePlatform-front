import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetClientsServiceRequest } from "./types";

export default function useGetClientsServices(request: GetClientsServiceRequest) {
  const { getClients } = useGet();

  async function handle() {
    const { data } = await getClients(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["clients/services", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
