import useGet from ".";
import { GetEventPreviewRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetEventsPreview(request: GetEventPreviewRequest) {
  const { getEvent } = useGet();

  async function handle() {
    const { data } = await getEvent(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: [`event/preview`, request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
