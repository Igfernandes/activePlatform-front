import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetFieldsRequest } from "./types";
import { FieldsShape } from "@type/Fields";

export async function getFields(
  tokenNavigation: string,
  request?: GetFieldsRequest
): Promise<FieldsShape[] | FieldsShape> {
  const { id, ...query } = request ?? {};

  const { fields } = API_ROUTES;
  const { data } = await axios.get<string>(
    setQueries({
      url: setParams({
        url: fields,
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

  return JSON.parse(data);
}
