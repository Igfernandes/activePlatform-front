import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchEventIsConfirmationPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePatchIsConfirmationService() {
  const { axios } = useAxios();
  const { clientsEvents } = API_ROUTES;
  const { setParams } = useRoutes();

  async function patch(payload: PatchEventIsConfirmationPayload) {
    return axios.patch(
      setParams({
        url: clientsEvents,
        data: {
          id: "",
          eventId: "",
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
