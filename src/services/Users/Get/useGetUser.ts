import { useQuery } from "@tanstack/react-query";
import useGet from "./";
import { GetUserRequest } from "./types";

export default function useGetUser(request: GetUserRequest) {
  const { getUser } = useGet();

  async function handle() {
    const { data } = await getUser(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["user"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
