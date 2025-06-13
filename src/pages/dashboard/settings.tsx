import { SettingsForms } from "@components/Private/Settings/Forms";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";

export default function Settings() {
  return (
    <DashboardContainer>
      <div className="bg-white p-6 rounded-xl">
        <div className="mb-6">
          <h1 className="text-2xl"><strong>{i18n("Words.setting")}</strong></h1>
        </div>
        <SettingsForms />
      </div>
    </DashboardContainer>
  );
}
