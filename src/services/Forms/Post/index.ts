import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;

  async function postCreateForm(payload: PostCreateFormPayload) {
    return axios.post(forms, getPayloadJSON(payload));
  }

  return {
    postCreateForm,
  };
}
