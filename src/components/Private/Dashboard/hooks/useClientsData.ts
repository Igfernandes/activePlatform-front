import useGetClients from "@services/Clients/Get/useGet";
import { useEffect, useState } from "react";
import { CategoryStaticData, ClientsByDDDStaticData } from "../type";
import { getOnlyNumbers } from "@helpers/numbers";

export function useClientsData() {
  const { data: clients } = useGetClients();
  const [categories, setCategories] = useState<Array<CategoryStaticData>>([]);
  const [clientsByDDD, setClientsByDDD] = useState<
    Array<ClientsByDDDStaticData>
  >([]);

  useEffect(() => {
    if (!clients) return;
    const categories: Array<CategoryStaticData> = [];
    const clientsByDDD: Array<ClientsByDDDStaticData> = [];

    clients.forEach((client) => {
      if (!client.phone) return;

      const phoneDDD = parseInt(
        getOnlyNumbers(client.phone).slice(0, 2)
      ) as number;
      clientsByDDD[phoneDDD] = {
        ddd: String(phoneDDD),
        amount: (clientsByDDD[phoneDDD]?.amount ?? 0) + 1,
      };
      client.categories.forEach(
        (category) =>
          (categories[category.id] = {
            ...category,
            clients: (categories[category.id]?.clients ?? 0) + 1,
          })
      );
    });

    setCategories(Object.values(categories));
    setClientsByDDD(Object.values(clientsByDDD));
  }, [clients]);

  return {
    clients,
    categories,
    clientsByDDD,
  };
}
