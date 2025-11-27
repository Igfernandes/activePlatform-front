import useGet from "./";
import { GetGroupsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetGroups(payload?: GetGroupsRequest) {
  const { getGroups } = useGet();

  return useQueryGuard({
    queryKey: ["users_groups", payload],
    queryFn: async () => {
      const { data } = await getGroups(payload);
      return data ?? false;
    },
  });
}
