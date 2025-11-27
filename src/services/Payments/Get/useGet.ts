import useGet from ".";
import { GetPaymentsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetPayments(request: GetPaymentsRequest = {}) {
  const { getPayments } = useGet();

  async function handle() {
    const { data } = await getPayments(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["payments", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
