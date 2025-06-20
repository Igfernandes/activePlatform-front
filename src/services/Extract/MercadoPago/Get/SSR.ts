import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetExtractRequest } from "./types";
import { MercadoPagoPaymentShape } from "@type/Extracts/MercadoPago/MercadoPago";

export async function getExtract(
  tokenNavigation: string,
  request?: GetExtractRequest
): Promise<MercadoPagoPaymentShape> {
  const query = request ?? {};

  const { extract } = API_ROUTES;
  const { data } = await axios.get<MercadoPagoPaymentShape>(
    setQueries({
      url: setParams({
        url: extract,
        data: query,
      }),
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}
