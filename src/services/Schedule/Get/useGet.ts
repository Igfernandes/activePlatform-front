import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetSchedulesRequest } from "./types";

export default function useGetSchedules(request: GetSchedulesRequest = {}) {
  const { getSchedules } = useGet();

  async function handle() {
    const { data } = await getSchedules(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["schedules", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
