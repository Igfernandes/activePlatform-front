import { useQuery } from "@tanstack/react-query";
import useGet from "./";
import { GetGroupsRequest } from "./types";

export default function useGetGroups(payload?: GetGroupsRequest) {
  const { getGroups } = useGet();

  return useQuery({
    queryKey: ["users_groups", payload],
    queryFn: async () => {
      const { data } = await getGroups(payload);
      return data ?? false;
    },
  });
}
