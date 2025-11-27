import useGet from ".";
import { GetClientsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClientPreview(request: GetClientsRequest = {}) {
  const { getClient } = useGet();

  async function handle() {
    const { data } = await getClient(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["clients/preview", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
