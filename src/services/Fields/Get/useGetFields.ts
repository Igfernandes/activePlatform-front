import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetFieldsRequest } from "./types";

export default function useGetFields(request: GetFieldsRequest = {}) {
  const { getFields } = useGet();

  async function handle() {
    const { data } = await getFields(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["fields", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
