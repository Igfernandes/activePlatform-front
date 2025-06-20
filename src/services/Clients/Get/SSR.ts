import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetClientsRequest } from "./types";
import { ClientShape } from "../../../types/Clients";

export async function getClients(
  tokenNavigation: string,
  request?: GetClientsRequest
): Promise<ClientShape[] | ClientShape> {
  const query = request ?? {};

  const { clients } = API_ROUTES;
  const { data } = await axios.get<ClientShape[] | ClientShape>(
    setQueries({
      url: clients,
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
