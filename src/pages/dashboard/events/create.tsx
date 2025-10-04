import { EventsForm } from "@components/Private/Events/Forms";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";

export default function FormCreate() {
  return (
    <DashboardContainer title={i18n("Words.new_event")}>
      <EventsForm />
    </DashboardContainer>
  );
}
