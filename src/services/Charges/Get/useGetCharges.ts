import useGet from ".";
import { ChargesResponse, GetChargesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetCharges<T extends GetChargesRequest>(
  request: T = {} as T
) {
  const { getCharges } = useGet();

  async function handle() {
    const data = await getCharges(request);
    return data ?? null;
  }

  return useQueryGuard<ChargesResponse<T>>({
    queryKey: ["charges", request],
    queryFn: handle,
    enabled: true,
  });
}
