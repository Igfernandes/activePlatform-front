import { useAxios } from "@hooks/useAxios";
import { PostImportClientPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function useImportClientsService() {
  const { axios } = useAxios();
  const { clientsImport } = API_ROUTES;

  async function postImportClient(payload: PostImportClientPayload) {
    const formData = new FormData();

    formData.append("excel", payload.excel[0]);

    return axios.post(clientsImport, formData);
  }

  return {
    postImportClient,
  };
}
