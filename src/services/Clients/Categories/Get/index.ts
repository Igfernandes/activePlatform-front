import { API_ROUTES } from "@configs/routes/Api/api";
import { GetCategoriesRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ClientCategoriesShape } from "../../../../types/Clients/ClientCategories";

export default function useGet() {
  const { categories } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getCategories(request?: GetCategoriesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<ClientCategoriesShape[]>(
      setQueries({
        url: setParams({ url: categories }),
        query,
      })
    );
  }

  return {
    getCategories,
  };
}
