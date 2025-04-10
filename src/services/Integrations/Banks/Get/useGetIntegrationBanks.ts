import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetIntegrationsBanksRequest } from "./types";

export default function useGetIntegrationBanks({
  type,
  ...request
}: GetIntegrationsBanksRequest = {}) {
  const { getIntegrationBanks } = useGet();

  async function handle() {
    const { data } = await getIntegrationBanks({ type, ...request });
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["integration/banks", { type }],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
