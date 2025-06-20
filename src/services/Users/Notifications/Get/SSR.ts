import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetNotificationsUserRequest } from "./types";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";

export async function getUserNotificationRequest(
  tokenNavigation: string,
  request?: GetNotificationsUserRequest
): Promise<UsersNotificationsShape[]> {
  const { id, ...query } = request ?? {};

  const { notificationsUser } = API_ROUTES;
  const { data } = await axios.get<UsersNotificationsShape[]>(
    setQueries({
      url: setParams({
        url: notificationsUser,
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
