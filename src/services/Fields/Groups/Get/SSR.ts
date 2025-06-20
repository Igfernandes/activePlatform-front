import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetFieldsGroupsRequest } from "./types";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

export async function getFieldsGroups(
  tokenNavigation: string,
  request?: GetFieldsGroupsRequest
): Promise<FieldsGroupsShape[] | FieldsGroupsShape> {
  const { id, fieldId, ...query } = request ?? {};

  const { fields } = API_ROUTES;
  const { data } = await axios.get<FieldsGroupsShape[] | FieldsGroupsShape>(
    setQueries({
      url: setParams({
        url: fields,
        data: {
          id: fieldId,
          groupId: id,
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
