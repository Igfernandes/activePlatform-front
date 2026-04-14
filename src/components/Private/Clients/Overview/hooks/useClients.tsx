import { useCallback, useEffect, useMemo, useState } from "react";
import {
  HookClientsProps,
  ModalClientsOperationType,
  TDataClient,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { Selector } from "@components/shared/layouts/Selector";
import { useModalContext } from "@contexts/Modal";
import { ClientActions } from "../ClientActions";
import { ClientShape, UserCategoryData } from "../../../../../types/Clients";
import { useClientsData } from "./useClientsData";
import useDeleteClient from "../../../../../services/Clients/Delete/useDeleteClient";
import { DeleteClientPayload } from "../../../../../services/Clients/Delete/type";
import { getNumberFormatted } from "@helpers/string";
import { useI18n } from "@contexts/I18n";

export function useClients({
  handleFilter,
  filter,
  status
}: HookClientsProps<ClientShape>) {
  const { t } = useI18n()
  const { categories, clients } = useClientsData();
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataClients, setTDataClients] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();
  const { mutateAsync: deleteClient, isPending: isLoadingClientDelete } =
    useDeleteClient();

  const tHeadsClient = useMemo<Array<string>>(() => [
    "ID",
    t("Words.name"),
    t("Words.status"),
    t("Words.phone"),
    t("Words.category"),
    t("Words.actions"),
  ], [t]);

  const getSelectedClientsName = (selectors: Array<SelectorShape>) => {
    return selectors
      .filter((selector) => selector.value != "all" && selector.isChecked)
      .map((selector) => selector.value)
      .join(",");
  };

  const updateClientForTable = useCallback(
    ({
      id,
      name,
      status,
      phone,
      categories = [],
    }: ClientShape): TDataClient => {
      const clientId = id.toString();

      return {
        id: <Selector label={clientId} value={clientId} />,
        name,
        status: t(`Words.${status.toLocaleLowerCase()}`) as "ACTIVE" | "INACTIVE",
        phone: getNumberFormatted(phone),
        category: categories
          .map((category: UserCategoryData) => category.name)
          .join(", "),
        actions: (
          <ClientActions handleToggleModal={handleToggleModal} status={status} id={id} />
        ),
      };
    },
    [handleToggleModal, t]
  );

  const handleDeleteClient = useCallback(() => {
    const payload = {} as DeleteClientPayload;
    const IdString = modal.id.toString();

    if (IdString.indexOf(","))
      payload["in_clients"] = IdString.split(",").map((clientId) =>
        parseInt(clientId)
      );
    else payload["client_id"] = modal.id as number;

    deleteClient(payload).then(() => {
      handleToggleModal(false);
    });
  }, [deleteClient, handleToggleModal, modal.id]);

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    if (!clients) return;

    const clientsFiltered = clients.filter((tDataClient) =>
      handleFilter(tDataClient) && status == tDataClient.status
    );

    setSelectors([
      ...clientsFiltered.map((client) => ({
        value: client.id.toString(),
        isChecked: false,
      })),
      {
        value: "all",
        isChecked: false,
      },
    ] as Array<SelectorShape>);

    const tDataClient = clientsFiltered.map((ClientProps) =>
      updateClientForTable(ClientProps)
    );

    setTDataClients(tDataClient);
  }, [clients, filter, updateClientForTable, handleFilter, status]);

  return {
    tDataClients,
    tHeadsClient,
    setSelectors,
    selectors,
    categories,
    handleDeleteClient,
    getSelectedClientsName,
    isLoadingClientDelete,
  };
}
