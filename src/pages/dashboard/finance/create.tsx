import { CreateCharge } from "@components/Private/Finance/Create";
import { useFinance } from "@components/Private/Finance/Create/hooks/useFinance";
import { ClientsModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useI18n } from "@contexts/I18n";

export default function FinanceCreate() {
  const { t } = useI18n()
  const { clients, updateClientsSelected, clientsSelected } = useFinance();

  return (
    <DashboardContainer title={t("Words.new_charge")}>
      <CreateCharge
        clients={clients}
        clientsSelected={clientsSelected}
        handleUpdateClients={updateClientsSelected}
      />
      <ClientsModal
        clientsSelected={clientsSelected}
        clients={clients}
        handleAddClients={updateClientsSelected}
      />
    </DashboardContainer>
  );
}
