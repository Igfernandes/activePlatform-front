import { useNotificationData } from "../Notifications/hooks/useNotificationData";
import { useSidebar } from "../Sidebar/hooks/useSidebar";
import { Sidebar } from "../Sidebar";
import { Header } from "@components/Private/Header";
import { Notifications } from "../Notifications";

type Props = {
  title?: string;
  children: React.ReactNode;
};
export function DashboardContent({ children, title }: Props) {
  const { handleToggleSidebar, showSidebar } = useSidebar();
  const {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    userNotifications,
    amountNotifications,
  } = useNotificationData();

  return (
    <>
      <div className="bg-secondary h-[100vh] overflow-hidden flex">
        <Sidebar
          handleToggleSidebar={handleToggleSidebar}
          showSidebar={showSidebar}
        />
        <div className="h-[100vh] w-full">
          <Header
            title={title}
            handleSidebar={handleToggleSidebar}
            handleNotification={handleToggleNotification}
            notificationsAmount={
              amountNotifications() > 9 ? "+9" : `${amountNotifications()}`
            }
          />
          <div className="h-full pb-[15vh] overflow-y-scroll">
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
      <Notifications
        notifications={notifications}
        userNotifications={userNotifications}
        handleNotification={handleToggleNotification}
        isShow={isShowNotifications}
      />
    </>
  );
}
