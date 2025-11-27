import { useUserNavigationContext } from "@contexts/UserNavigation";
import useGetNotifications from "@services/Notifications/Get/useGet";
import useGetUserNotifications from "@services/Users/Notifications/Get/useGetUserNotifications";
import usePostUserNotifications from "@services/Users/Notifications/Post/usePost";
import { NotificationShape } from "@type/Notifications/Notifications";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";
import { useEffect, useState } from "react";

export function useNotificationData() {
  const { userAuth } = useUserNavigationContext();
  const [isShowNotifications, setIsShowNotifications] =
    useState<boolean>(false);
  const { data: notificationsData, isFetched: isFetchedNotifications } =
    useGetNotifications();
  const { data: userNotificationsData, isFetched: isFetchedUserNotifications } =
    useGetUserNotifications({
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
    setNotifications(notificationsData ?? []);
    setUserNotifications(userNotificationsData ?? []);
  }, [notificationsData, userNotificationsData]);

  return {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    userNotifications,
    amountNotifications,
  };
}
