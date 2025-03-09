import { useQuery } from "@tanstack/react-query";
import useGet from "./";
import { GetUsersRequest } from "./types";

export default function useGetUsers(payload?: GetUsersRequest) {
  const { getUsers } = useGet();

  return useQuery({
    queryKey: ["users", payload],
    queryFn: async () => {
      const { data } = await getUsers(payload);
      return data ?? false;
    },
  });
}
