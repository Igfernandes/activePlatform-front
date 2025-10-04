import { useAxios } from "@hooks/useAxios";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { PostPayload } from "./type";

export function usePostEvent() {
  const { axios } = useAxios();
  const { formsEvent } = API_ROUTES;
  const { setParams } = useRoutes();

  async function post({ formPackage }: PostPayload) {
    return axios.post(
      setParams({
        url: formsEvent,
        data: {
          package: formPackage,
        },
      })
    );
  }

  return {
    post,
  };
}
