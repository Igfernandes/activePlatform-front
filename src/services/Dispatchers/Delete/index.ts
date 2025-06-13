import { useAxios } from "@hooks/useAxios";
import { DeleteMessageDispatcherPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteMessageDispatcherService() {
  const { axios } = useAxios();
  const { messagesDispatcher } = API_ROUTES;

  async function deleteMessageDispatcher({ id }: DeleteMessageDispatcherPayload) {
    return axios.delete(`${messagesDispatcher}/${id}`);
  }

  return {
    deleteMessageDispatcher,
  };
}
