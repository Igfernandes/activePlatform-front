import { Header } from "@components/Private/Header";
import { Sidebar } from "../Sidebar";
import ModalProvider from "@contexts/Modal";
import { useSidebar } from "../Sidebar/hooks/useSidebar";
import UserNavigationProvider from "@contexts/UserNavigation";

type Props = {
  children: React.ReactNode;
};

export function DashboardContainer<ModalOptions>({ children }: Props) {
  const { handleToggleSidebar, showSidebar } = useSidebar();

  return (
    <UserNavigationProvider>
      <ModalProvider<ModalOptions>>
        <div className="bg-secondary h-[100vh] overflow-hidden flex">
          <Sidebar
            handleToggleSidebar={handleToggleSidebar}
            showSidebar={showSidebar}
          />
          <div className="h-[100vh] w-full">
            <Header handleSidebar={handleToggleSidebar} />
            <div className="h-full pb-[15vh] overflow-y-scroll">
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </UserNavigationProvider>
  );
}
