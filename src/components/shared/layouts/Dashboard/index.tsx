import { Header } from "@components/Private/Header";
import { Sidebar } from "../Sidebar";
import ModalProvider from "@contexts/Modal";

type Props = {
  children: React.ReactNode;
};

export function DashboardContainer<ModalOptions>({ children }: Props) {
  return (
    <ModalProvider<ModalOptions>>
      <div className="bg-secondary h-[100vh] overflow-hidden flex">
        <Sidebar />
        <div className="h-[100vh] w-full overflow-scroll hidden-scroll">
          <Header />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </ModalProvider>
  );
}
