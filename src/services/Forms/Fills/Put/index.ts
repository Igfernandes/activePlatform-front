import { useAxios } from "@hooks/useAxios";
import { PutFillsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { getPayloadJSON } from "@helpers/payload";
import { useRoutes } from "@hooks/useRoutes";

export function usePutFillsService() {
  const { axios } = useAxios();
  const { formsFillsFields } = API_ROUTES;
  const { setParams } = useRoutes();

  async function putFills({ formId, ref, fields }: PutFillsPayload) {
    return axios.put(
      setParams({
        url: formsFillsFields,
        data: {
          id: formId,
          package: ref,
        },
      }),
      getPayloadJSON(fields)
    );
  }
  return {
    putFills,
  };
}
