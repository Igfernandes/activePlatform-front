import useGet from ".";
import { GetFillFieldsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetFillFields(request: GetFillFieldsRequest) {
  const { getForms } = useGet();

  async function handle() {
    const { data } = await getForms(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["forms/fills", request],
    queryFn: handle,
    enabled: true,
  });
  return { data: data, ...rest };
}
