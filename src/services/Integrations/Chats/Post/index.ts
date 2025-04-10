import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostIntegrationChatPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostIntegrationChatsService() {
  const { axios } = useAxios();
  const { integrationChats } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postIntegrationChat(payload: PostIntegrationChatPayload) {
    return axios.post(
      setParams({
        url: integrationChats,
        data: {
          id: "",
        },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postIntegrationChat,
  };
}
