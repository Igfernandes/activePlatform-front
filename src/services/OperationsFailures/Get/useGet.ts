import useGet from ".";
import { GetOperationsFailuresRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetOperationsFailures(
  request: GetOperationsFailuresRequest = {}
) {
  const { getOperationsFailures } = useGet();

  async function handle() {
    const { data } = await getOperationsFailures(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["operationsFailures", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
