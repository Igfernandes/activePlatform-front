import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useWebSocket } from "@hooks/useWebsocket";
import useGetNotifications from "@services/Notifications/Get/useGet";
import useGetUserNotifications from "@services/Users/Notifications/Get/useGetUserNotifications";
import usePostUserNotifications from "@services/Users/Notifications/Post/usePost";
import { NotificationShape } from "@type/Notifications/Notifications";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";
import { useEffect, useState } from "react";

export function useNotificationData() {
  const { messages, connected } = useWebSocket();
  const { userAuth } = useUserNavigationContext();
  const [isShowNotifications, setIsShowNotifications] =
    useState<boolean>(false);
  const {
    data: notificationsData,
    isFetched: isFetchedNotifications,
    refetch: refetchNotifications,
  } = useGetNotifications();
  const {
    data: userNotificationsData,
    refetch: refetchUserNotifications,
    isFetched: isFetchedUserNotifications,
  } = useGetUserNotifications({
    id: userAuth?.id,
  });
  const [notifications, setNotifications] = useState<Array<NotificationShape>>(
    []
  );
  const [userNotifications, setUserNotifications] = useState<
    Array<UsersNotificationsShape>
  >([]);
  const { mutateAsync: postUserNotifications } = usePostUserNotifications();

  const handleToggleNotification = (isShow: boolean) => {
    setIsShowNotifications(isShow);
    if (isShow && userNotifications?.length < notifications.length) {
      postUserNotifications();
    }
  };

  const amountNotifications = () => {
    return isFetchedNotifications && isFetchedUserNotifications && userAuth
      ? notifications.length - userNotifications.length
      : 0;
  };

  useEffect(() => {
    if (!connected) return;

    refetchNotifications();
    refetchUserNotifications();
  }, [connected, messages]);

  useEffect(() => {
    setNotifications(notificationsData ?? []);
    setUserNotifications(userNotificationsData ?? []);
  }, [notificationsData, userNotificationsData]);

  return {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    userNotifications,
    amountNotifications
  };
}
