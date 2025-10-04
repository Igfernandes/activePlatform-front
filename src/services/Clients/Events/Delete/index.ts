import { useAxios } from "@hooks/useAxios";
import { DeleteClientEventPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteClientEventService() {
  const { axios } = useAxios();
  const { clientsEvents } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteClient({
    client_id,
    eventId,
  }: DeleteClientEventPayload) {
    return axios.delete(
      setParams({
        url: clientsEvents,
        data: {
          id: client_id,
          eventId,
        },
      })
    );
  }

  return {
    deleteClient,
  };
}
