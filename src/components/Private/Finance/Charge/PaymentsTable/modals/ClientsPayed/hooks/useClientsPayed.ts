import { ClientShape } from "@type/Clients";
import { ClientsPayedPayload } from "../type";
import { useModalContext } from "@contexts/Modal";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { z } from "zod";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { useCallback } from "react";

type Props = {
  clients: ClientShape[];
  handleAddClients: (clients: Array<ClientShape>) => void;
};

export function useClientsPayed({ handleAddClients, clients }: Props) {
  const { formMethods, handleSubmit, register } =
    useFormRules<ClientsPayedPayload>({
      schema: z.object({
        clients: z.array(z.string().or(z.boolean())).optional(),
      }),
    });
  const { handleSearch, filterObjects } = useSearch();
  const { handleToggleModal } = useModalContext();

  const submit = useCallback(
    (payload: ClientsPayedPayload) => {
      const clientsId = payload.clients;
      handleAddClients(
        clients.filter((client) => clientsId.includes(String(client.id))),
      );
      handleToggleModal(formMethods.getValues());

      formMethods.reset();
    },
    [clients, handleAddClients, handleToggleModal, formMethods],
  );

  const getClientsFiltered = (clients: Array<ClientShape>) => {
    return clients.filter((client) => filterObjects(client));
  };

  return {
    formMethods,
    submit,
    handleSubmit,
    register,
    handleSearch,
    filterObjects,
    getClientsFiltered,
  };
}
