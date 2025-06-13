import { useEffect, useState } from "react";
import { ClientShape } from "@type/Clients";
import useGetClients from "@services/Clients/Get/useGet";
import { ChargeShape } from "@type/Charges";
import usePostChargeClients from "@services/Charges/Clients/Post/usePostChargeClients";
import { useSnackbar } from "@hooks/useSnackbar";
import i18n from "@configs/i18n";

type Props = {
  charge: ChargeShape;
};

export function useCharge({ charge }: Props) {
  const { data: ClientsData } = useGetClients({ status: "ACTIVE" });
  const [clients, setClients] = useState<Array<ClientShape>>([]);
  const [clientsSelected, setClientsSelected] = useState<Array<ClientShape>>(
    []
  );
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: postChargeClients } = usePostChargeClients();

  const updateClientsSelected = async (clients: Array<ClientShape>) => {
    if (clientsSelected.length < clients.length) {
      dispatchSnackbar({
        type: "notice",
        message: i18n("Words.await_sending"),
      });
    }
    await postChargeClients({
      clients: clients.map((client) => client.id),
      charge_id: charge.id,
    });

    setClientsSelected(clients);
  };

  useEffect(() => {
    if (!ClientsData) return;

    setClients(ClientsData);
  }, [ClientsData]);

  useEffect(() => {
    if (!charge || !ClientsData) return;

    const clientsId = charge.clients?.map((client) => client.id);
    setClientsSelected(
      ClientsData?.filter((client) => clientsId?.includes(client.id))
    );
  }, [charge, ClientsData]);

  return {
    clients,
    updateClientsSelected,
    clientsSelected,
    setClientsSelected,
  };
}
