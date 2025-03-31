import { useAxios } from "@hooks/useAxios";
import { PatchStatusFormPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePatchStatusFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;

  async function patchStatus({ id }: PatchStatusFormPayload) {
    return axios.patch(
      `${forms}/${id}`,
      getPayloadJSON({
        operation: "status",
      })
    );
  }

  return {
    patchStatus,
  };
}
