import { useClients } from "@components/shared/others/ClientsTable/hooks/useClients";
import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import { useDeleteClientEvent } from "@services/Clients/Events/Delete/useDeleteClientService";
import useGetClientsEvents from "@services/Clients/Events/Get/useGet";
import usePostClientsEvents from "@services/Clients/Events/Post/usePost";
import { ClientEventShape } from "@type/Clients/ClientEvent";
import { EventShape } from "@type/Events";
import { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  event?: EventShape;
  stock?: number | string;
};

export function useInscribeEvent({ event, stock }: Props) {
  const { clients } = useClients();
  const { dispatchSnackbar } = useSnackbar();
  const { data: inscribesData = [] } = useGetClientsEvents({
    eventId: event?.id ?? 0,
  });

  const { mutateAsync: postClientsEvents, isPending: isLoadingInscribes } =
    usePostClientsEvents();
  const { mutateAsync: unsubscribe } = useDeleteClientEvent();

  const [clientsSelected, setClientsSelected] = useState<ClientEventShape[]>(
    []
  );

  // 🔹 Evita recriação desnecessária da função
  const handleUpdateClientsSelected = useCallback(
    (list: ClientEventShape[]) => {
      setClientsSelected(list);
    },
    []
  );

  // 🔹 Atualiza seleção ao carregar dados de inscrições
  useEffect(() => {
    if (inscribesData && inscribesData.length) {
      handleUpdateClientsSelected(inscribesData);
    }
  }, [inscribesData, handleUpdateClientsSelected]);

  // 🔹 Função de desinscrição de cliente
  const handleUnsubscribe = useCallback(
    async (inscribeId: number) => {
      if (!event) return;

      await unsubscribe({
        client_id: inscribeId,
        eventId: event.id,
      });

      // Atualiza lista após remover
      handleUpdateClientsSelected(
        inscribesData.filter((inscribe) => inscribe.id != inscribeId) ?? []
      );
    },
    [event, inscribesData, unsubscribe, handleUpdateClientsSelected]
  );

  // 🔹 Função para inscrever clientes
  const handleInscribes = useCallback(
    async (inscribeIds: number[]) => {
      if (!event) return;

      const selected = clients.filter((client) =>
        inscribeIds.includes(client.id)
      );

      const limitExceeded = stock && +stock < selected.length;

      if (limitExceeded) {
        return dispatchSnackbar({
          type: "notice",
          message: i18n("Texts.not_stocks"),
        });
      }

      await postClientsEvents({
        client_ids: inscribeIds,
        eventId: event.id,
      });

      handleUpdateClientsSelected(inscribesData ?? []);
    },
    [
      event,
      stock,
      clients,
      inscribesData,
      postClientsEvents,
      handleUpdateClientsSelected,
      dispatchSnackbar,
    ]
  );

  return useMemo(
    () => ({
      clients,
      clientsSelected,
      handleInscribes,
      handleUpdateClientsSelected,
      isLoadingInscribes,
      handleUnsubscribe,
    }),
    [
      clients,
      clientsSelected,
      handleInscribes,
      handleUpdateClientsSelected,
      isLoadingInscribes,
      handleUnsubscribe,
    ]
  );
}
