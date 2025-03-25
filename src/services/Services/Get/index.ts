import { API_ROUTES } from "@configs/routes/Api/api";
import { GetServicesRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ServicesShape } from "../../../types/Services";

export default function useGet() {
  const { services } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getServices(request?: GetServicesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<ServicesShape[]>(
      setQueries({
        url: setParams({ url: services }),
        query,
      })
    );
  }

  return {
    getServices,
  };
}
