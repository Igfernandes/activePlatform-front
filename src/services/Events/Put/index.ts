import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutEventsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { fileToBase64 } from "@helpers/file";
import { useRoutes } from "@hooks/useRoutes";

export function usePutEventsService() {
  const { axios } = useAxios();
  const { setParams } = useRoutes();
  const { eventById } = API_ROUTES;

  async function putEvents(payload: PutEventsPayload) {
    let banner = null;
    if (
      payload.banner instanceof FileList &&
      Array.from(payload.banner).length > 0
    ) {
      const photoFile = payload.banner[0];
      banner = {
        base64: await fileToBase64(photoFile),
        name: photoFile.name,
        type: photoFile.type,
        size: photoFile.size,
      };
      delete payload["banner"];
    } else {
      banner = payload.banner;
      delete payload["banner"];
    }

    return axios.put(
      setParams({
        url: eventById,
        data: {
          id: payload.id,
        },
      }),
      getPayloadJSON({ ...payload, banner })
    );
  }

  return {
    putEvents,
  };
}
