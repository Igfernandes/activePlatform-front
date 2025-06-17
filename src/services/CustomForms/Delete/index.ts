import { useAxios } from "@hooks/useAxios";
import { DeleteFormPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteFormService() {
  const { axios } = useAxios();
  const { forms } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteForm({ id }: DeleteFormPayload) {
    return axios.delete(
      setParams({
        url: forms,
        data: {
          id,
        },
      })
    );
  }

  return {
    deleteForm,
  };
}
