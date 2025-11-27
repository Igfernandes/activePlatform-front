import useGetClients from "@services/Clients/Get/useGet";
import { useMemo } from "react";
import { CategoryStaticData, ClientsByDDDStaticData } from "../type";
import { getOnlyNumbers } from "@helpers/numbers";

export function useClientsData() {
  const { data: clients } = useGetClients();

  const { categories, clientsByDDD } = useMemo(() => {
    if (!clients) return { categories: [], clientsByDDD: [] };

    const categoriesMap: Record<string, CategoryStaticData> = {};
    const dddMap: Record<string, ClientsByDDDStaticData> = {};

    for (const client of clients) {
      if (!client.phone) continue;

      const ddd = getOnlyNumbers(client.phone).slice(0, 2);

      dddMap[ddd] = {
        ddd,
        amount: (dddMap[ddd]?.amount ?? 0) + 1,
      };

      for (const category of client.categories) {
        categoriesMap[category.id] = {
          ...category,
          clients: (categoriesMap[category.id]?.clients ?? 0) + 1,
        };
      }
    }

    return {
      categories: Object.values(categoriesMap),
      clientsByDDD: Object.values(dddMap),
    };
  }, [clients]);

  return {
    clients,
    categories,
    clientsByDDD,
  };
}
