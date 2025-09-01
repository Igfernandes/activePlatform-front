import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetServicePreviewRequest } from "./types";
import { ServicesShape } from "@type/Services";

export default function useGetPreview() {
  const { servicesPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getService(query: GetServicePreviewRequest) {
    return await axios.get<ServicesShape | Array<ServicesShape>>(
      setQueries({
        url: servicesPreview,
        query,
      })
    );
  }

  return {
    getService,
  };
}
