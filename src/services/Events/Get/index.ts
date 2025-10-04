import { API_ROUTES } from "@configs/routes/Api/api";
import { GetEventsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { EventShape } from "@type/Events";

export default function useGet() {
  const { eventById } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getEvent(request?: GetEventsRequest) {
    const { id, ...query } = request ?? {};
    return await axios.get<EventShape[]|EventShape>(
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
  }

  return {
    getEvent,
  };
}
