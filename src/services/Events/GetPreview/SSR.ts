import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetEventPreviewRequest } from "./types";
import { EventPreviewShape } from "@type/Events";

export async function getEventPreview(
  request?: GetEventPreviewRequest
): Promise<EventPreviewShape> {
  const query = request ?? {};

  const { eventsPreview } = API_ROUTES;

  const { data } = await axios.get<EventPreviewShape>(
    setQueries({
      url: eventsPreview,
      query,
    })
  );

  return data;
}
