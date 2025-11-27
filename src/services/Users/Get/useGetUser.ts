import useGet from "./";
import { GetUserRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUser(request: GetUserRequest) {
  const { getUser } = useGet();

  async function handle() {
    const { data } = await getUser(request);
    return data ?? null;
  }

  return useQueryGuard({
    queryKey: ["user"],
    queryFn: handle,
    enabled: true,
  });
}
