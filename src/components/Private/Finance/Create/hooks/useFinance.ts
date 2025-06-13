import { useEffect, useState } from "react";
import { ClientShape } from "@type/Clients";
import useGetClients from "@services/Clients/Get/useGet";

export function useFinance() {
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
