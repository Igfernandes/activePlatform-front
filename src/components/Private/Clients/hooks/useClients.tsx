import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { HookClientsProps, ModalClientsOperationType, TDataClient } from "../type";
import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { Selector } from "@components/shared/layouts/Seletor";
import { useModalContext } from "@contexts/Modal";
import { ClientActions } from "../ClientActions";
import { UsersShape } from "../../../../types/Users/Users";

export function useClients({
  data: currentClient,
  handleFilter,
  filter,
}: HookClientsProps<UsersShape>) {
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataClients, setTDataClients] = useState<Array<Record<string, unknown>>>(
    []
  );
  const { handleToggleModal } = useModalContext<ModalClientsOperationType>();

  const tHeadsClient = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.cpf_cnpj"),
    i18n("words.email"),
    i18n("words.phone"),
    i18n("words.category"),
    i18n("words.actions"),
  ]);

  const updateClientForTable = ({
    id,
    name,
    cpf,
    cnpj,
    email,
    phone,
    category,
  }: UsersShape): TDataClient => {
    const clientId = id.toString();

    return {
      id: <Selector  value={clientId} label={clientId} />,
      name,
      identify: cpf ?? cnpj,
      email,
      phone,
      category,
      actions: <ClientActions handleToggleModal={handleToggleModal} id={id} />,
    };
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    const clientsFiltered = currentClient.filter((tDataClient) =>
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
  }, [currentClient, filter]);

  return {
    tDataClients,
    tHeadsClient,
    setSelectors,
    selectors,
  };
}
