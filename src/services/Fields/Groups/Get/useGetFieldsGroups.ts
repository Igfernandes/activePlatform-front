import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetFieldsGroupsRequest } from "./types";

export default function useGetFieldsGroups(
  request: GetFieldsGroupsRequest = {}
) {
  const { getFieldsGroups } = useGet();

  async function handle() {
    const { data } = await getFieldsGroups(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["fields/groups", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
