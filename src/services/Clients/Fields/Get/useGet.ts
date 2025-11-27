import useGet from ".";
import { GetClientsFieldsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClientsFields(
  request: GetClientsFieldsRequest = {}
) {
  const { getClientsFields } = useGet();

  async function handle() {
    const { data } = await getClientsFields(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["clients/fields"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
