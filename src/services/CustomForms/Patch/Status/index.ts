import { useAxios } from "@hooks/useAxios";
import { PatchStatusFormPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePatchStatusFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;
  const { setParams } = useRoutes();

  async function patchStatus({ id }: PatchStatusFormPayload) {
    return axios.patch(
      setParams({
        url: forms,
        data: {
          id,
        },
      }),
      getPayloadJSON({
        operation: "status",
      })
    );
  }

  return {
    patchStatus,
  };
}
