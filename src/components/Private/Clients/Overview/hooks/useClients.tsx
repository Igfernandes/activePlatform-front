import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import {
  HookClientsProps,
  ModalClientsOperationType,
  TDataClient,
} from "../../type";
import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { Selector } from "@components/shared/layouts/Seletor";
import { useModalContext } from "@contexts/Modal";
import { ClientActions } from "../ClientActions";
import {
  ClientShape,
  UserCategoryData,
} from "../../../../../types/Clients/client";
import { useClientsData } from "./useClientsData";
import useDeleteClient from "../../../../../services/Clients/Delete/useDeleteClient";
import { DeleteClientPayload } from "../../../../../services/Clients/Delete/type";

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
  const { mutateAsync: deleteClient } = useDeleteClient();

  const tHeadsClient = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.cpf_cnpj"),
    i18n("words.email"),
    i18n("words.phone"),
    i18n("words.category"),
    i18n("words.actions"),
  ]);

  const getSelectedClientsName = (selectors: Array<SelectorShape>) => {
    return selectors
      .filter((selector) => selector.value != "all" && selector.isChecked)
      .map((selector) => selector.value)
      .join(",");
  };

  const updateClientForTable = ({
    id,
    name,
    status,
    email,
    phone,
    categories = [],
  }: ClientShape): TDataClient => {
    const clientId = id.toString();

    return {
      id: <Selector value={clientId} label={clientId} />,
      name,
      status: i18n(`words.${status.toLocaleLowerCase()}`),
      email: `${email ?? "Não informado"}`,
      phone,
      category: categories
        .map((category: UserCategoryData) => category.name)
        .join(", "),
      actions: <ClientActions handleToggleModal={handleToggleModal} id={id} />,
    };
  };

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
  }, [clients, filter]);

  return {
    tDataClients,
    tHeadsClient,
    setSelectors,
    selectors,
    categories,
    handleDeleteClient,
    getSelectedClientsName,
  };
}
