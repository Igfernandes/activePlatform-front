import ModalProvider from "@contexts/Modal";
import UserNavigationProvider from "@contexts/UserNavigation";
import { DashboardContent } from "./Content";
import { UsersShape } from "@type/Users";

type Props = {
  user?: UsersShape;
  title?: string;
  children: React.ReactNode;
};

export function DashboardContainer<ModalOptions>({
  children,
  title,
  user,
}: Props) {
  return (
    <UserNavigationProvider user={user ?? {} as UsersShape}>
      <ModalProvider<ModalOptions>>
        <DashboardContent title={title}>{children}</DashboardContent>
      </ModalProvider>
    </UserNavigationProvider>
  );
}
