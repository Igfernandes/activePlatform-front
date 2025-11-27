import { useCallback, useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
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

export function useClients({
  handleFilter,
  filter,
}: HookClientsProps<ClientShape>) {
  const { categories, clients } = useClientsData();
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataClients, setTDataClients] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalClientsOperationType>();
  const { mutateAsync: deleteClient, isPending: isLoadingClientDelete } =
    useDeleteClient();

  const tHeadsClient = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.status"),
    i18n("Words.phone"),
    i18n("Words.category"),
    i18n("Words.actions"),
  ]);

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
        status: i18n(`Words.${status.toLocaleLowerCase()}`) as "ACTIVE" | "INACTIVE",
        phone: getNumberFormatted(phone),
        category: categories
          .map((category: UserCategoryData) => category.name)
          .join(", "),
        actions: (
          <ClientActions handleToggleModal={handleToggleModal} id={id} />
        ),
      };
    },
    [handleToggleModal]
  );

  const handleDeleteClient = () => {
    const payload = {} as DeleteClientPayload;
    const IdString = modal.id.toLocaleString();

    if (IdString.indexOf(","))
      payload["in_clients"] = IdString.split(",").map((clientId) =>
        parseInt(clientId)
      );
    else payload["client_id"] = modal.id as number;

    deleteClient(payload).then(() => {
      handleToggleModal(false);
    });
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    if (!clients) return;

    const clientsFiltered = clients.filter((tDataClient) =>
      handleFilter(tDataClient)
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
  }, [clients, filter, updateClientForTable, handleFilter]);

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
