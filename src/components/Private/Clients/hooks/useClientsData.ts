import { useEffect, useState } from "react";
import { ClientCategoriesShape } from "../../../../types/Clients/ClientCategories";
import useGetCategories from "../../../../services/Clients/Categories/Get/useGetCategories";

export function useClientsData() {
  const [categories, setCategories] = useState<ClientCategoriesShape[]>();
  const { data } = useGetCategories();

  useEffect(() => {
    setCategories(data);
  }, [data]);

  return {
    categories,
  };
}
