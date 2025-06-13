import { useEffect, useState } from "react";
import { ClientCategoriesShape } from "../../../../../types/Clients/ClientCategories";
import useGetCategories from "../../../../../services/Clients/Categories/Get/useGetCategories";
import useGetClients from "../../../../../services/Clients/Get/useGet";
import { ClientShape } from "../../../../../types/Clients";

export function useClientsData() {
  const [categories, setCategories] = useState<ClientCategoriesShape[]>();
  const [clients, setClients] = useState<ClientShape[]>();
  const { data: categoryData, isFetched: isFetchedCategory } =
    useGetCategories();
  const { data: clientsData } = useGetClients();

  useEffect(() => {
    setCategories(categoryData);
  }, [categoryData, isFetchedCategory]);

  useEffect(() => {
    setClients(clientsData);
  }, [clientsData]);

  return {
    categories,
    clients,
  };
}
