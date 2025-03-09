import { useQuery } from "@tanstack/react-query";
import useGetAuth from ".";

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

  const { data, ...rest } = useQuery({
    queryKey: ["userAuth"],
    queryFn: handle,
    enabled: false,
  });
  return { data, ...rest };
}
