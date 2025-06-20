import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetChargesRequest } from "./types";
import { ChargeShape } from "@type/Charges";

export async function getCharges(
  tokenNavigation: string,
  request?: GetChargesRequest
): Promise<ChargeShape[] | ChargeShape> {
  const query = request ?? {};

  const { chargesId } = API_ROUTES;
  const { data } = await axios.get<ChargeShape[] | ChargeShape>(
    setQueries({
      url: chargesId.replace("{id}", String(request?.id ?? "")),
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
