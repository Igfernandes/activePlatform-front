import { CreateCharge } from "@components/Private/Finance/Create";
import { useFinance } from "@components/Private/Finance/Create/hooks/useFinance";
import { ClientsModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";

export default function FinanceCreate() {
  const { clients, updateClientsSelected, clientsSelected } = useFinance();

  return (
    <DashboardContainer title={i18n("Words.new_charge")}>
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
