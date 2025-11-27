import useGet from "./";
import { GetUsersRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUsers(payload?: GetUsersRequest) {
  const { getUsers } = useGet();

  async function handle() {
    const { data } = await getUsers(payload);
    return data ?? false;
  }

  return useQueryGuard({
    queryKey: ["users", payload],
    enabled: true,
    queryFn: handle,
  });
}
