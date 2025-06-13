import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetIntegrationsRequest } from "./types";

export default function useGetIntegrations({
  type,
  ...request
}: GetIntegrationsRequest = {}) {
  const { getIntegrations } = useGet();

  async function handle() {
    const { data } = await getIntegrations({ type, ...request });
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["integrations", { type }],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
