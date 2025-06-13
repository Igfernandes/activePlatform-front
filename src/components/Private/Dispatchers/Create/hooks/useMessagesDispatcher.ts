import useGetClients from "@services/Clients/Get/useGet";
import { ClientShape } from "@type/Clients";
import { useEffect, useState } from "react";

export function useMessagesDispatcher() {
  const { data: ClientsData } = useGetClients({ status: "ACTIVE" });
  const [clients, setClients] = useState<Array<ClientShape>>([]);
  const [clientsSelected, setClientsSelected] = useState<Array<ClientShape>>(
    []
  );

  const updateClientsSelected = (clients: Array<ClientShape>) => {
    setClientsSelected(clients);
  };

  useEffect(() => {
    if (!ClientsData) return;

    setClients(ClientsData);
  }, [ClientsData]);

  return {
    clients,
    updateClientsSelected,
    clientsSelected,
    setClientsSelected,
  };
}
