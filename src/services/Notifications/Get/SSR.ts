import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetNotificationsRequest } from "./types";
import { NotificationShape } from "@type/Notifications/Notifications";

export async function getUserNotificationRequest(
  tokenNavigation: string,
  request?: GetNotificationsRequest
): Promise<NotificationShape[]> {
  const { id, ...query } = request ?? {};

  const { notifications } = API_ROUTES;
  const { data } = await axios.get<NotificationShape[]>(
    setQueries({
      url: setParams({
        url: notifications,
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
