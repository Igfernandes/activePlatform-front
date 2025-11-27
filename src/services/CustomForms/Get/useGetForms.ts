import { useQueryGuard } from "@hooks/useAxios";
import useGet from ".";
import { FormsResponse, GetFormsRequest } from "./types";

export default function useGetForms<T extends GetFormsRequest>(
  request: T = {} as T
) {
  const { getForms } = useGet();

  async function handle() {
    const data = await getForms(request);
    return data ?? null;
  }

  return useQueryGuard<FormsResponse<T>>({
    queryKey: ["forms", request],
    queryFn: handle,
    enabled: true,
  });
}
