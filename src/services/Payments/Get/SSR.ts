import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetPaymentsRequest } from "./types";
import { PaymentShape } from "@type/Payments";

export async function getCharges(
  tokenNavigation: string,
  request?: GetPaymentsRequest
): Promise<PaymentShape[] | PaymentShape> {
  const query = request ?? {};

  const { payments } = API_ROUTES;
  const { data } = await axios.get<PaymentShape[] | PaymentShape>(
    setQueries({
      url: `${payments}/${request?.id}`,
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
