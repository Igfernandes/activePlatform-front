import { API_ROUTES } from "@configs/routes/Api/api";
import { GetClientsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ClientShape } from "../../../types/Clients/client";

export default function useGet() {
  const { clients } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getClients(request?: GetClientsRequest) {
    const { ...query } = request ?? {};
    return await axios.get<ClientShape[]>(
      setQueries({
        url: setParams({ url: clients }),
        query,
      })
    );
  }

  return {
    getClients,
  };
}
