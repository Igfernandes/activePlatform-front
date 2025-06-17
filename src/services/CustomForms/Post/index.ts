import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateForm(payload: PostCreateFormPayload) {
    return axios.post(
      setParams({
        url: forms,
        data: {
          id: "",
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateForm,
  };
}
