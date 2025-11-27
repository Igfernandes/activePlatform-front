import { API_ROUTES } from "@configs/routes/Api/api";
import { ChargesResponse, GetChargesRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { charges } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getCharges<T extends GetChargesRequest>(
    request?: T
  ): Promise<ChargesResponse<T>> {
    const { ...query } = request ?? {};
    const { data } = await axios.get<ChargesResponse<T>>(
      setQueries({
        url: setParams({ url: charges }),
        query,
      })
    );

    return data;
  }

  return {
    getCharges,
  };
}
