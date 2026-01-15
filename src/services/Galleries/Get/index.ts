import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetGalleriesResponse, GetGalleriesRequest } from "./types";

export default function useGet() {
  const { galleries } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getGalleries(request?: GetGalleriesRequest) {
    const { id } = request ?? {};
    return await axios.get<GetGalleriesResponse>(
      setQueries({
        url: setParams({
          url: galleries,
          data: {
            id: id,
          },
        }),
      })
    );
  }

  return {
    getGalleries,
  };
}
