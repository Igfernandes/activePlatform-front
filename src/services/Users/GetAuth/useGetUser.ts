import useGetAuth from ".";
import { useQueryGuard } from "@hooks/useAxios";

type Props = {
  tokenNavigation: string;
}

export default function useGetUserAuth({
  tokenNavigation
}: Props) {
  const { getUser } = useGetAuth();

  async function handle() {
    const { data } = await getUser(tokenNavigation);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["userAuth"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
