import { ApiBoard } from "@components/Private/Apis/ApiBoard";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Apis() {
  return (
    <DashboardContainer>
      <div>
        <ApiBoard />
      </div>
    </DashboardContainer>
  );
}
