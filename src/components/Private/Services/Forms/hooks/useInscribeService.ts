import { useClients } from "@components/shared/others/ClientsTable/hooks/useClients";
import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import useGetClientsServices from "@services/Clients/Services/Get/useGet";
import usePostClientsService from "@services/Clients/Services/Post/usePost";
import { ClientShape } from "@type/Clients";
import { ClientServiceShape } from "@type/Clients/ClientService";
import { ServicesShape } from "@type/Services";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";

type Props = {
  service?: ServicesShape;
  stock?: number | string;
};

export function useInscribeService({ service, stock }: Props) {
  const { clients } = useClients();
  const { dispatchSnackbar } = useSnackbar();

  const { data: inscribesData } = useGetClientsServices({
    serviceId: service?.id ?? 0,
  });

  const { mutateAsync: postClientsService, isPending: isLoadingInscribes } =
    usePostClientsService();

  const [clientsSelected, setClientsSelected] = useState<ClientServiceShape[]>(
    []
  );

  const handleUpdateClientsSelected = useCallback(
    (list: ClientServiceShape[]) => setClientsSelected(list),
    []
  );

  const filterByGratuity = useCallback(
    (list: ClientShape[]) => {
      if (!service?.gratuity) return list;
      return list.filter(
        (client) =>
          !dayjs(client.birthdate).isAfter(
            dayjs().subtract(service.gratuity ?? 0, "years")
          )
      );
    },
    [service?.gratuity]
  );

  const handleInscribes = useCallback(
    async (inscribeIds: number[]) => {
      if (!service) return;

      const clientsSelected = clients.filter((Client) =>
        inscribeIds.includes(Client.id)
      );

      const validInscribes = filterByGratuity(clientsSelected);

      if (stock && +stock < validInscribes.length) {
        return dispatchSnackbar({
          type: "notice",
          message: i18n(`Texts.not_stocks`),
        });
      }

      await postClientsService({
        client_ids: inscribeIds,
        serviceId: service.id,
      });

      handleUpdateClientsSelected(inscribesData ?? []);
    },
    [service, stock, inscribesData]
  );

  useEffect(() => {
    if (!inscribesData) return;

    handleUpdateClientsSelected(inscribesData);
  }, [inscribesData, clients, handleUpdateClientsSelected]);

  return {
    clients,
    clientsSelected,
    handleInscribes,
    handleUpdateClientsSelected,
    isLoadingInscribes,
  };
}
