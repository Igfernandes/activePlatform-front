import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchClientsCategoryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePatchClientsCategoryService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function patchClientsCategory(payload: PatchClientsCategoryPayload) {
    return axios.patch(
      clients,
      getPayloadJSON({
        path: "category",
        data: payload,
      })
    );
  }

  return {
    patchClientsCategory,
  };
}
