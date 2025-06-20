import { API_ROUTES } from "@configs/routes/Api/api";
import { GetClientsServiceRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ClientServiceShape } from "@type/Clients/ClientService";

export default function useGet() {
  const { clientsServices } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams } = useRoutes();

  async function getClients({ serviceId, id }: GetClientsServiceRequest) {
    return await axios.get<ClientServiceShape[]>(
      setParams({
        url: clientsServices,
        data: {
          id: id ?? "",
          serviceId,
        },
      })
    );
  }

  return {
    getClients,
  };
}
