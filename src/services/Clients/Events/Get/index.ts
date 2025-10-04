import { API_ROUTES } from "@configs/routes/Api/api";
import { GetClientsEventRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ClientEventShape } from "@type/Clients/ClientEvent";

export default function useGet() {
  const { clientsEvents } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams } = useRoutes();

  async function getClients({ eventId, id }: GetClientsEventRequest) {
    return await axios.get<ClientEventShape[]>(
      setParams({
        url: clientsEvents,
        data: {
          id: id ?? "",
          eventId,
        },
      })
    );
  }

  return {
    getClients,
  };
}
