import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetGalleriesRequest, GetGalleriesResponse } from "./types";

export async function getGalleries(
  tokenNavigation: string,
  { id, ...request }: GetGalleriesRequest = {} as GetGalleriesRequest
): Promise<GetGalleriesResponse> {
  const query = request ?? {};

  const { galleriesPreview } = API_ROUTES;
  const { data, ...rest } = await axios.get<GetGalleriesResponse>(
    setQueries({
      url: setParams({
        url: galleriesPreview,
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

  return {
    ...rest,
    rows: data.rows ?? [],
    count: data.count ?? 0,
  };
}
