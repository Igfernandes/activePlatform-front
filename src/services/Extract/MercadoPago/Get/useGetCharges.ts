import useGet from ".";
import { GetExtractRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetCharges(request: GetExtractRequest = {}) {
  const { getCharges } = useGet();

  async function handle() {
    const { data } = await getCharges(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["charges", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
