import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateFieldsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostFieldsService() {
  const { axios } = useAxios();
  const { fields } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateFields(payload: PostCreateFieldsPayload) {
    return axios.post(
      setParams({
        url: fields,
        data: {
          id: "",
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateFields,
  };
}
