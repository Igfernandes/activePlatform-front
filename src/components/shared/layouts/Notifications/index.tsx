import { ArrowNarrowLeft } from "@assets/Icons/black/ArrowNarrowLeft";
import i18n from "@configs/i18n";
import { NotificationItem } from "./Items";
import { useNotifications } from "./hooks/useNotifications";
import { When } from "@components/utilities/When";
import { NotificationShape } from "@type/Notifications/Notifications";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";

type Props = {
  userNotifications: Array<UsersNotificationsShape>;
  notifications: Array<NotificationShape>;
  isShow: boolean;
  handleNotification: (isShow: boolean) => void;
};
export function Notifications({
  isShow,
  handleNotification,
  notifications,
  userNotifications,
}: Props) {
  const { notificationBarStyled } = useNotifications({ isShow });

  return (
    <When value={isShow}>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div
          className={`content w-full md:w-[35%] min-w-[300px] bg-white h-[100vh] transition-all duration-500 p-4 ml-auto ${notificationBarStyled}`}
        >
          <div className="header flex justify-between">
            <div className="flex">
              <div className="mr-4" onClick={() => handleNotification(false)}>
                <ArrowNarrowLeft className="bg-tertiary rounded-md cursor-pointer" />
              </div>
              <div>
                <span className="font-bold">{i18n("Words.notifications")}</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-secondary">{`${userNotifications.length}/${notifications.length}`}</span>
            </div>
          </div>
          <hr className="mt-4 border-secondary border-[1px]" />
          <div className="body h-[90vh] overflow-y-auto">
            {notifications.map((notification, key) => (
              <NotificationItem
                props={notification}
                key={`notification_${notification.id}_${key}`}
              />
            ))}
          </div>
        </div>
      </div>
    </When>
  );
}
