import { GetServicesRequest } from "./types";
import { ServicesShape } from "../../../types/Services";
import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";

export async function getServices(
  tokenNavigation: string,
  request?: GetServicesRequest
): Promise<ServicesShape[] | ServicesShape> {
  const { id, ...query } = request ?? {};

  const { serviceById } = API_ROUTES;

  const { data } = await axios.get<ServicesShape[] | ServicesShape>(
    setQueries({
      url: setParams({
        url: serviceById,
        data: {
          id,
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
