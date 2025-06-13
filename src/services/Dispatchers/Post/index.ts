import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostMessagesDispatcherPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostMessagesDispatcherService() {
  const { axios } = useAxios();
  const { messagesDispatcher } = API_ROUTES;

  async function postMessagesDispatcher(
    payload: PostMessagesDispatcherPayload
  ) {
    return axios.post(messagesDispatcher, getPayloadJSON(payload));
  }

  return {
    postMessagesDispatcher,
  };
}
