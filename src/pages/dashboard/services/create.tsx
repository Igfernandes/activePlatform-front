import { ServicesForm } from "@components/Private/Services/Forms";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";

export default function ServicesCreate() {
  return (
    <DashboardContainer title={i18n('Words.new_service')}>
      <ServicesForm />
    </DashboardContainer>
  );
}
