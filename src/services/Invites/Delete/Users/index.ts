import { useAxios } from "@hooks/useAxios";
import { DeleteInviteUserPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteInviteUserService() {
  const { axios } = useAxios();
  const { invites } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteInvite({ id }: DeleteInviteUserPayload) {
    return axios.delete(
      setParams({
        url: `${invites}/user`,
        data: {
          id,
        },
      })
    );
  }

  return {
    deleteInvite,
  };
}
