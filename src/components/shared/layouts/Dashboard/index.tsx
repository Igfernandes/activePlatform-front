import { Sidebar } from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

export function DashboardContainer({ children }: Props) {
  return (
    <div className="bg-secondary h-[100vh] overflow-hidden flex">
      <Sidebar />
     <div className="h-[100vh] overflow-scroll hidden-scroll">
     {children}
     </div>
    </div>
  );
}
