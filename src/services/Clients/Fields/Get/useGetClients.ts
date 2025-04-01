import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetClientsFieldsRequest } from "./types";

export default function useGetClientsFields(request: GetClientsFieldsRequest = {}) {
  const { getClientsFields } = useGet();

  async function handle() {
    const { data } = await getClientsFields(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["clients/fields", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
