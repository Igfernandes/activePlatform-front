import { useMemo, useState } from "react";
import { ClientShape } from "@type/Clients";
import useGetClients from "@services/Clients/Get/useGet";
import { useI18n } from "@contexts/I18n";

export function useFinance() {
  const { t } = useI18n();
  const tHeadsClient = useMemo(
    () => [
      "ID",
      t("Words.name"),
      t("Words.phone"),
      t("Words.email"),
      t("Words.category"),
      t("Words.actions"),
    ],
    [t],
  );

  const { data: ClientsData } = useGetClients({ status: "ACTIVE" });
  const clients = useMemo(() => ClientsData ?? [], [ClientsData]);
  const [clientsSelected, setClientsSelected] = useState<Array<ClientShape>>(
    [],
  );

  const updateClientsSelected = (clients: Array<ClientShape>) => {
    setClientsSelected(clients);
  };

  return {
    clients,
    updateClientsSelected,
    clientsSelected,
    setClientsSelected,
    tHeadsClient,
  };
}
