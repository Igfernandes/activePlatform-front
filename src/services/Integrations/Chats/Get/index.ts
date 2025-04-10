import { API_ROUTES } from "@configs/routes/Api/api";
import { GetIntegrationsChatsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { IntegrationChatsShape } from "@type/integrations";

export default function useGet() {
  const { integrationChats } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getIntegrationChats(request?: GetIntegrationsChatsRequest) {
    const { id, ...query } = request ?? {};

    return await axios.get<IntegrationChatsShape[]>(
      setQueries({
        url: setParams({
          url: integrationChats,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getIntegrationChats,
  };
}
