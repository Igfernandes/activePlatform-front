import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetPaymentsRequest } from "./types";

export default function useGetPayments(request: GetPaymentsRequest = {}) {
  const { getPayments } = useGet();

  async function handle() {
    const { data } = await getPayments(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["payments", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
