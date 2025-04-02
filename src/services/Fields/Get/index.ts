import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFieldsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { FieldsShape } from "../../../types/Fields";

export default function useGet() {
  const { fields } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getFields(request?: GetFieldsRequest) {
    const { id, ...query } = request ?? {};

    return await axios.get<FieldsShape[]>(
      setQueries({
        url: setParams({
          url: fields,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getFields,
  };
}
