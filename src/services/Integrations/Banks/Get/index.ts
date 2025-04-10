import { API_ROUTES } from "@configs/routes/Api/api";
import { GetIntegrationsBanksRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { IntegrationBanksShape } from "@type/integrations";

export default function useGet() {
  const { integrationBanks } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getIntegrationBanks(request?: GetIntegrationsBanksRequest) {
    const { id, ...query } = request ?? {};

    return await axios.get<IntegrationBanksShape[]>(
      setQueries({
        url: setParams({
          url: integrationBanks,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getIntegrationBanks,
  };
}
