import { API_ROUTES } from "@configs/routes/Api/api";
import { GetServicesRequest, ServicesResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { serviceById } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getServices<T extends GetServicesRequest>(
    request?: T
  ): Promise<ServicesResponse<T>> {
    const { id, ...query } = request ?? {};

    const { data } = await axios.get<ServicesResponse<T>>(
      setQueries({
        url: setParams({
          url: serviceById,
          data: { id },
        }),
        query,
      })
    );

    return data;
  }

  return {
    getServices,
  };
}
