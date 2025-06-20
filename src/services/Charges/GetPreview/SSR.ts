import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetChargePreviewRequest } from "./types";
import { ChargePreviewShape } from "@components/Public/Payment/types";

export async function getCharge(
  tokenNavigation: string,
  request?: GetChargePreviewRequest
): Promise<ChargePreviewShape> {
  const query = request ?? {};

  const { chargesPreview } = API_ROUTES;

  const { data } = await axios.get<ChargePreviewShape>(
    setQueries({
      url: chargesPreview,
      query,
    })
  );

  return data;
}
