import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetOperationsFailuresRequest } from "./types";
import { OperationFailureShape } from "@type/OperationsFailures";

export async function getCharges(
  tokenNavigation: string,
  request?: GetOperationsFailuresRequest
): Promise<OperationFailureShape[] | OperationFailureShape> {
  const { id, ...query } = request ?? {};

  const { operationsFailures } = API_ROUTES;
  const { data } = await axios.get<OperationFailureShape[] | OperationFailureShape>(
    setQueries({
      url: setParams({
        url: operationsFailures,
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
