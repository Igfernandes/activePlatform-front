import { ClientShape } from "@type/Clients";
import { ClientsPayedPayload } from "../type";
import { useModalContext } from "@contexts/Modal";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { z } from "zod";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import useGetCategories from "@services/Clients/Categories/Get/useGetCategories";
import { useEffect, useState } from "react";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";

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
  const { data: categoriesData } = useGetCategories();
  const [categories, setCategories] = useState<Array<ClientCategoriesShape>>(
    []
  );

  const submit = async (payload: ClientsPayedPayload) => {
    const clientsId = payload.clients;
    await handleAddClients(
      clients.filter((client) => clientsId.includes(String(client.id)))
    );
    handleToggleModal(formMethods.getValues());

    formMethods.reset();
  };

  const getClientsFiltered = (clients: Array<ClientShape>) => {
    return clients.filter((client) => {
      const category = formMethods.watch("category");

      if (!category) return filterObjects(client);

      formMethods.setValue("clients", []);
      return (
        filterObjects(client) &&
        client.categories.find(
          (clientCategory) => clientCategory.id === +category
        )
      );
    });
  };

  useEffect(() => {
    setCategories(categoriesData ?? []);
  }, [categoriesData]);

  return {
    formMethods,
    submit,
    handleSubmit,
    register,
    handleSearch,
    filterObjects,
    getClientsFiltered,
    categories,
  };
}
