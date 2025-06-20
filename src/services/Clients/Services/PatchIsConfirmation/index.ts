import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchServiceIsConfirmationPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePatchIsConfirmationService() {
  const { axios } = useAxios();
  const { clientsServices } = API_ROUTES;
  const { setParams } = useRoutes();

  async function patch(payload: PatchServiceIsConfirmationPayload) {
    return axios.patch(
      setParams({
        url: clientsServices,
        data: {
          id: "",
          serviceId: "",
        },
      }),
      getPayloadJSON({
        path: "is_confirm",
        data: payload,
      })
    );
  }

  return {
    patch,
  };
}
