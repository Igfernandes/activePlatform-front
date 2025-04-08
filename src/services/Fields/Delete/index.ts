import { useAxios } from "@hooks/useAxios";
import { DeleteFieldPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteFieldService() {
  const { axios } = useAxios();
  const { fields } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteFields({ id }: DeleteFieldPayload) {
    return axios.delete(
      setParams({
        url: fields,
        data: {
          id,
        },
      })
    );
  }

  return {
    deleteFields,
  };
}
