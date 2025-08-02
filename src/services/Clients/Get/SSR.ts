import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetClientsRequest } from "./types";
import { ClientShape } from "../../../types/Clients";

export async function getClients(
  tokenNavigation: string,
  { id, ...request }: GetClientsRequest = {}
): Promise<ClientShape[] | ClientShape> {
  const query = request ?? {};

  const { clientsById } = API_ROUTES;
  const { data } = await axios.get<ClientShape[] | ClientShape>(
    setQueries({
      url: setParams({
        url: clientsById,
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
