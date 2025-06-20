import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetServicePreviewRequest } from "./types";
import { ServicePreviewShape } from "@type/Services";

export async function getServicePreview(
  request?: GetServicePreviewRequest
): Promise<ServicePreviewShape> {
  const query = request ?? {};

  const { servicesPreview } = API_ROUTES;

  const { data } = await axios.get<ServicePreviewShape>(
    setQueries({
      url: servicesPreview,
      query,
    })
  );

  return data;
}
