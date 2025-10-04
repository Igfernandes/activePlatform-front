import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostClientsEventsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostClientsEventsService() {
  const { axios } = useAxios();
  const { clientsEvents } = API_ROUTES;
  const { setParams } = useRoutes();

  async function post({ eventId, ...payload }: PostClientsEventsPayload) {
    return axios.post(
      setParams({
        url: clientsEvents,
        data: {
          id: "",
          eventId,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    post,
  };
}
