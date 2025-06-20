import { useClients } from "@components/shared/others/ClientsTable/hooks/useClients";
import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import usePostClientsService from "@services/Clients/Services/Post/usePost";
import { ClientShape } from "@type/Clients";
import { ServicesShape } from "@type/Services";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

type Props = {
  service?: ServicesShape;
  stock?: number | string;
};

export function useInscribeService({ service, stock }: Props) {
  const [clientsSelected, setClientsSelected] = useState<Array<ClientShape>>(
    []
  );
  const { clients } = useClients();
  const handleUpdateClientsSelected = useCallback(
    (clients: Array<ClientShape>) => setClientsSelected(clients),
    []
  );
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: postClientsService } = usePostClientsService();

  const handleInscribes = (inscribes: Array<ClientShape>) => {
    if (!service) return;

    const inscribesWithoutGratuity = inscribes.filter(
      (inscribe) =>
        !service.gratuity ||
        dayjs(inscribe.birthdate).isAfter(
          dayjs().subtract(service.gratuity ?? 0, "years")
        )
    );

    if (clientsSelected.length > inscribes.length || stock == 0) {
      // Situação oposta
    } else if (stock && +stock < inscribesWithoutGratuity.length)
      return dispatchSnackbar({
        type: "notice",
        message: i18n(`Texts.not_stocks`),
      });

    const clientIds = inscribes.map((client) => client.id);
    postClientsService({
      client_ids: inscribes.map((client) => client.id),
      serviceId: service.id,
    }).then(() =>
      handleUpdateClientsSelected(
        clients.filter((client) => clientIds.includes(client.id))
      )
    );
  };
  return {
    clients,
    clientsSelected,
    handleInscribes,
    handleUpdateClientsSelected,
  };
}
