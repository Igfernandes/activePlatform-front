import { API_ROUTES } from "@configs/routes/Api/api";
import { EventsResponse, GetEventsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { eventById } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getEvent<T extends GetEventsRequest>(request?: T) {
    
    const { id, ...query } = request ?? {};
    const { data } = await axios.get<EventsResponse<T>>(
      setQueries({
        url: setParams({
          url: eventById,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
    return data;
  }

  return {
    getEvent,
  };
}
