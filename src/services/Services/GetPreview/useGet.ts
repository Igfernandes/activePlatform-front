import useGet from ".";
import { GetServicePreviewRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetServicesPreview(request: GetServicePreviewRequest) {
  const { getService } = useGet();

  async function handle() {
    const { data } = await getService(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: [`services/preview`, request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
