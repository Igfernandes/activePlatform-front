import { useAxios } from "@hooks/useAxios";
import { DeleteEventPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useDeleteService() {
  const { axios } = useAxios();
  const { events } = API_ROUTES;

  async function deleteEvents({ id }: DeleteEventPayload) {
    return axios.delete(`${events}/${id}`);
  }

  return {
    deleteEvents,
  };
}
