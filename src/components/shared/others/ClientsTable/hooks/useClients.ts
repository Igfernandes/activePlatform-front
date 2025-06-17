import useGetClients from "@services/Clients/Get/useGet";
import { ClientShape } from "@type/Clients";
import { useCallback, useEffect, useState } from "react";

type Props = {
  clientsSelectedDefault?: Array<number>;
};

export function useClients({ clientsSelectedDefault }: Props = {}) {
  const { data: ClientsData } = useGetClients({ status: "ACTIVE" });
  const [clients, setClients] = useState<Array<ClientShape>>([]);
  const [clientsSelected, setClientsSelected] = useState<Array<ClientShape>>(
    []
  );

  const handleUpdateClientsSelected = useCallback(
    (clients: Array<ClientShape>) => setClientsSelected(clients),
    []
  );

  useEffect(() => {
    if (!ClientsData) return;

    setClients(ClientsData);
  }, [ClientsData]);

  useEffect(() => {
    if (!clientsSelectedDefault || !ClientsData) return;

    setClientsSelected(
      ClientsData?.filter((client) =>
        clientsSelectedDefault?.includes(client.id)
      )
    );
  }, [clientsSelectedDefault, ClientsData]);

  return {
    clientsSelected,
    clients,
    handleUpdateClientsSelected,
  };
}
