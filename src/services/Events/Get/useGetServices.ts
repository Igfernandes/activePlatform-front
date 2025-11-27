import useGet from ".";
import { EventsResponse, GetEventsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetEvents<T extends GetEventsRequest>(request: T = {} as T) {
  const { getEvent } = useGet();

  const { data, ...rest } = useQueryGuard<EventsResponse<T>>({
    queryKey: ["events", request],
    queryFn: () => getEvent(request),
    enabled: true,
  });

  return { data, ...rest };
}
