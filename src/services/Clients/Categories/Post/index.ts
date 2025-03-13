import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostCreateCategoryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostCategoriesService() {
  const { axios } = useAxios();
  const { categories } = API_ROUTES;

  async function postCreateCategory(payload: PostCreateCategoryPayload) {
    return axios.post(categories, getPayloadJSON(payload));
  }

  return {
    postCreateCategory,
  };
}
