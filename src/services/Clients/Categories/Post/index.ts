import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostCategoriesService() {
  const { axios } = useAxios();
  const { category } = API_ROUTES;

  async function postCreateUser(payload: PostCreateUserPayload) {
    return axios.post(category, getPayloadJSON(payload));
  }

  return {
    postCreateUser,
  };
}
