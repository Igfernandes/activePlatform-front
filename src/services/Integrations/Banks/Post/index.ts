import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostIntegrationBankPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostIntegrationBanksService() {
  const { axios } = useAxios();
  const { integrationBanks } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postIntegrationBank(payload: PostIntegrationBankPayload) {
    return axios.post(
      setParams({
        url: integrationBanks,
        data: {
          id: "",
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postIntegrationBank,
  };
}
