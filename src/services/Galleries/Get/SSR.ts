import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetGalleriesRequest, GetGalleriesResponse } from "./types";

export async function getGalleries(
  tokenNavigation: string,
  { id, ...request }: GetGalleriesRequest = {} as GetGalleriesRequest
) {
  const query = request ?? {};

  const { galleriesById } = API_ROUTES;
  const { data } = await axios.get<GetGalleriesResponse>(
    setQueries({
      url: setParams({
        url: galleriesById,
        data: {
          id: id ?? "",
        },
      }),
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}
