import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutMessageDispatcherPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePutDispatcherService() {
  const { axios } = useAxios();
  const { messagesDispatcherId } = API_ROUTES;
  const { setParams } = useRoutes();

  async function putDispatcher({ id, ...payload }: PutMessageDispatcherPayload) {
    return axios.put(
      setParams({
        url: messagesDispatcherId,
        data: {
          id,
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    putDispatcher,
  };
}
