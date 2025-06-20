import { useAxios } from "@hooks/useAxios";
import { PostPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostService() {
  const { axios } = useAxios();
  const { formsServices } = API_ROUTES;
  const { setParams } = useRoutes();

  async function post({ serviceId, formPackage }: PostPayload) {
    return axios.post(
      setParams({
        url: formsServices,
        data: {
          package: formPackage,
          serviceId,
        },
      })
    );
  }

  return {
    post,
  };
}
