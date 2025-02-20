import { Header } from "@components/Private/Header";
import { Sidebar } from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

export function DashboardContainer({ children }: Props) {
  return (
    <div className="bg-secondary h-[100vh] overflow-hidden flex">
      <Sidebar />
      <div className="h-[100vh] w-full overflow-scroll hidden-scroll">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
