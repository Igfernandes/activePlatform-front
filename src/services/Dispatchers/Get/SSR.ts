import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetMessagesDispatcherRequest } from "./types";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";

export async function getMessagesDispatcherRequest(
  tokenNavigation: string,
  request?: GetMessagesDispatcherRequest
): Promise<MessagesDispatcherShape[] | MessagesDispatcherShape> {
  const { id, ...query } = request ?? {};

  const { messagesDispatcher } = API_ROUTES;
  const { data } = await axios.get<MessagesDispatcherShape[] | MessagesDispatcherShape>(
    setQueries({
      url: setParams({
        url: messagesDispatcher,
        data: {
          id: id ?? "",
        },
      }),
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}
