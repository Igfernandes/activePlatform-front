import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { Clients as ClientTable } from "@components/Private/Clients/Overview/Clients";
import { ModalClientsOperationType } from "@components/Private/Clients/type";
import { OptionsBar } from "@components/Private/Clients/Overview/OptionsBar";

export default function Clients() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer<ModalClientsOperationType>>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <ClientTable filterObjects={filterObjects} search={search} />
      </div>
    </DashboardContainer>
  );
}

