import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetServicePreviewRequest } from "./types";

export default function useGetCharges(request: GetServicePreviewRequest) {
  const { getService } = useGet();

  async function handle() {
    const { data } = await getService(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: [`services/preview`, request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
