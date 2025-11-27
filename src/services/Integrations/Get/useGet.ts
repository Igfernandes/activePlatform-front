import useGet from ".";
import { GetIntegrationsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetIntegrations({
  type,
  ...request
}: GetIntegrationsRequest = {}) {
  const { getIntegrations } = useGet();

  async function handle() {
    const { data } = await getIntegrations({ type, ...request });
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["integrations", { type }],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
