import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutEventsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePutEventsService() {
  const { axios } = useAxios();
  const { setParams } = useRoutes();
  const { eventById } = API_ROUTES;

  async function putEvents(payload: PutEventsPayload) {
    return axios.put(
      setParams({
        url: eventById,
        data: {
          id: payload.id,
        },
      }),
      getPayloadJSON(payload),
    );
  }

  return {
    putEvents,
  };
}
