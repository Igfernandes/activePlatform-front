import { useAxios } from "@hooks/useAxios";
import { usersRoutes } from "@configs/routes/Api/users";
import { PatchStatusUserPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";

export function usePatchStatusUserService() {
  const { axios } = useAxios();
  const { users } = usersRoutes;

  async function patchStatus({ id }: PatchStatusUserPayload) {
    return axios.patch(
      `${users}/${id}`,
      getPayloadJSON({
        operation: "status",
      })
    );
  }

  return {
    patchStatus,
  };
}
