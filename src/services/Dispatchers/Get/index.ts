import { API_ROUTES } from "@configs/routes/Api/api";
import { GetMessagesDispatcherRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";

export default function useGet() {
  const { messagesDispatcher } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getMessagesDispatcher(request?: GetMessagesDispatcherRequest) {
    const { id, ...query } = request ?? {};
    return await axios.get<MessagesDispatcherShape[]>(
      setQueries({
        url: setParams({
          url: messagesDispatcher,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getMessagesDispatcher,
  };
}
