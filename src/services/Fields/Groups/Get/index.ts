import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFieldsGroupsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

export default function useGet() {
  const { fieldsGroups } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getFieldsGroups(request?: GetFieldsGroupsRequest) {
    const { id, fieldId, ...query } = request ?? {};

    return await axios.get<FieldsGroupsShape[]>(
      setQueries({
        url: setParams({
          url: fieldsGroups,
          data: {
            id: fieldId ?? "",
            fieldId: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getFieldsGroups,
  };
}
