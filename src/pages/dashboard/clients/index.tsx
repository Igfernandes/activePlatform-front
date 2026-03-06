import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { Clients as ClientTable } from "@components/Private/Clients/Overview/Clients";
import { ModalClientsOperationType } from "@components/Private/Clients/type";
import { OptionsBar } from "@components/Private/Clients/Overview/OptionsBar";
import { useState } from "react";
import { Status } from "@type/status";

export default function Clients() {
  const [status, setStatus] = useState<Status>("ACTIVE");
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer<ModalClientsOperationType>>
      <div>
        <OptionsBar handleSearch={handleSearch} setStatus={setStatus} />
        <ClientTable filterObjects={filterObjects} status={status} search={search} />
      </div>
    </DashboardContainer>
  );
}

