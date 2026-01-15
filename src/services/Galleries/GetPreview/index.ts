import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetGalleriesResponse, GetGalleriesRequest } from "./types";

export default function useGetPreview() {
  const { galleriesPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getGalleries(request?: GetGalleriesRequest) {
    const { id } = request ?? {};
    return await axios.get<GetGalleriesResponse>(
      setQueries({
        url: setParams({
          url: galleriesPreview,
          data: {
            id: id ?? "",
          },
        }),
      })
    );
  }

  return {
    getGalleries,
  };
}
