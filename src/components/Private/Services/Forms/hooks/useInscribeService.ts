import { useClients } from "@components/shared/others/ClientsTable/hooks/useClients";
import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import usePostClientsService from "@services/Clients/Services/Post/usePost";
import { ClientShape } from "@type/Clients";
import { ServicesShape } from "@type/Services";

type Props = {
  service?: ServicesShape;
  stock?: number | string;
};

export function useInscribeService({ service, stock }: Props) {
  const { clients, clientsSelected, handleUpdateClientsSelected } =
    useClients();
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: postClientsService } = usePostClientsService();

  const handleInscribes = (clients: Array<ClientShape>) => {
    if (!service) return;

    if (clientsSelected.length > clients.length || stock == 0) {
      // Situação oposta
    } else if (stock && +stock < clients.length)
      return dispatchSnackbar({
        type: "notice",
        message: i18n(`Texts.not_stocks`),
      });

    postClientsService({
      client_ids: clients.map((client) => client.id),
      serviceId: service.id,
    }).then(() => handleUpdateClientsSelected(clients));
  };
  return {
    clients,
    clientsSelected,
    handleInscribes,
  };
}
