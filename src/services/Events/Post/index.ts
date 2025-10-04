import { useAxios } from "@hooks/useAxios";
import { getPayloadFormData } from "@helpers/payload";
import { PostEventsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostEventsService() {
  const { axios } = useAxios();
  const { events } = API_ROUTES;

  async function postEvents(payload: PostEventsPayload) {
    let banner = null;

    if (
      payload.banner instanceof FileList &&
      Array.from(payload.banner).length > 0
    )
      banner = payload.banner[0];
    else delete payload["banner"];

    return axios.post(events, getPayloadFormData({ ...payload, banner }));
  }

  return {
    postEvents,
  };
}
