import useGet from ".";
import { GetFieldsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetFields(request: GetFieldsRequest = {}) {
  const { getFields } = useGet();

  async function handle() {
    const { data } = await getFields(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["fields", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
