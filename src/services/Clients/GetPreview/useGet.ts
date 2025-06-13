import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetClientsRequest } from "./types";

export default function useGetClientPreview(request: GetClientsRequest = {}) {
  const { getClient } = useGet();

  async function handle() {
    const { data } = await getClient(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["clients/preview", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
