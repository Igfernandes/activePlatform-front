import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetOperationsFailuresRequest } from "./types";

export default function useGetOperationsFailures(
  request: GetOperationsFailuresRequest = {}
) {
  const { getOperationsFailures } = useGet();

  async function handle() {
    const { data } = await getOperationsFailures(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["operationsFailures", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
