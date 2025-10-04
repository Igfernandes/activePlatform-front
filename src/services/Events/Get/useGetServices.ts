import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetEventsRequest } from "./types";

export default function useGetEvents(request: GetEventsRequest = {}) {
  const { getEvent } = useGet();

  async function handle() {
    const { data } = await getEvent(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["events", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
