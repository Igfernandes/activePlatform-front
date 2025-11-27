import useGet from ".";
import { GetServicesRequest, ServicesResponse } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetServices<T extends GetServicesRequest>(
  request: T = {} as T
) {
  const { getServices } = useGet();

  async function handle() {
    const data = await getServices(request);
    return data;
  }

  return useQueryGuard<ServicesResponse<T>>({
    queryKey: ["services", request],
    queryFn: handle,
    enabled: true,
  });
}
