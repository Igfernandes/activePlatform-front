import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetEventPreviewRequest } from "./types";

export default function useGetEventsPreview(request: GetEventPreviewRequest) {
  const { getEvent } = useGet();

  async function handle() {
    const { data } = await getEvent(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: [`event/preview`, request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
