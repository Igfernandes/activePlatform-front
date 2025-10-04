import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetEventPreviewRequest } from "./types";
import { EventShape } from "@type/Events";

export default function useGetPreview() {
  const { eventsPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getEvent(query: GetEventPreviewRequest) {
    return await axios.get<EventShape | Array<EventShape>>(
      setQueries({
        url: eventsPreview,
        query,
      })
    );
  }

  return {
    getEvent,
  };
}
