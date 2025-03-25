import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetServicesRequest } from "./types";

export default function useGetServices(request: GetServicesRequest = {}) {
  const { getServices } = useGet();

  async function handle() {
    const { data } = await getServices(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["services", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
