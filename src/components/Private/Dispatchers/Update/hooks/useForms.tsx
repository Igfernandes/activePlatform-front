import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";
import { DispatcherUpdatePayload, DispatcherUpdateSchema } from "../schemas";
import useGetClients from "@services/Clients/Get/useGet";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import usePutMessagesDispatcher from "@services/Dispatchers/Put/usePut";
import { ClientShape } from "@type/Clients";
import useGetClientsDispatchers from "@services/Clients/Dispatchers/Get/useGet";
import { ClientsMessagesDispatcherShape } from "@type/MessagesDispatcherShape/ClientsMessagesDispatcher";

dayjs.extend(customParseFormat);

type Props = {
  dispatcher: MessagesDispatcherShape;
};

export function useForms({ dispatcher }: Props) {
  const { formMethods, handleSubmit, errors } =
    useFormRules<DispatcherUpdatePayload>({
      schema: DispatcherUpdateSchema,
      defaultValues: {
        status: dispatcher.status,
      },
    });
  const [clientsSelected, setClientsSelected] = useState<Array<ClientShape>>(
    []
  );
  const { data: clientsDispatchersData } = useGetClientsDispatchers({
    message_id: dispatcher.id,
  });
  const { data: clientsData } = useGetClients();
  const [clients, setClients] = useState<Array<ClientShape>>([]);
  const [clientsDispatchers, setClientsDispatchers] = useState<
    Array<ClientsMessagesDispatcherShape>
  >([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { mutateAsync: putDispatcher, isPending: isLoading } =
    usePutMessagesDispatcher();

  const submit = (payload: DispatcherUpdatePayload) => {
    putDispatcher({
      ...payload,
      id: dispatcher.id,
      clients: clientsSelected.map((client) => client.id),
    });
  };

  const handleToggleModel = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  useEffect(() => {
    if (!clientsData) return;

    setClients(clientsData);
  }, [clientsData]);

  useEffect(() => {
    if (!clientsDispatchersData) return;

    setClientsDispatchers(clientsDispatchersData);
  }, [clients, clientsDispatchersData]);

  return {
    formMethods,
    handleSubmit,
    errors,
    submit,
    isShowModal,
    handleToggleModel,
    isLoading,
    clients,
    setClientsSelected,
    clientsSelected,
    clientsDispatchers,
  };
}
