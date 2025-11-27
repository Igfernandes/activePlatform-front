import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFormsRequest, FormsResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { forms } = API_ROUTES;
  const { axios} = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getForms<T extends GetFormsRequest>(
    request?: T
  ): Promise<FormsResponse<T>> {
    const { id, ...query } = request ?? {};

    const { data } = await axios.get<FormsResponse<T>>(
      setQueries({
        url: setParams({
          url: forms,
          data: {
            id,
          },
        }),
        query,
      })
    );
    return data;
  }

  return {
    getForms
  };
}
