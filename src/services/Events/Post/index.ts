import { useAxios } from "@hooks/useAxios";
import { getPayloadFormData } from "@helpers/payload";
import { PostEventsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostEventsService() {
  const { axios } = useAxios();
  const { events } = API_ROUTES;

  async function postEvents(payload: PostEventsPayload) {
    return axios.post(events, getPayloadFormData(payload));
  }

  return {
    postEvents,
  };
}
