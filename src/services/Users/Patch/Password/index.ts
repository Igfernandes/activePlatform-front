import { useAxios } from "@hooks/useAxios";
import { usersRoutes } from "@configs/routes/Api/users";
import { PatchPasswordUserPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";

export function usePatchPasswordUserService() {
  const { axios } = useAxios();
  const { users } = usersRoutes;

  async function patchPassword({ id, ...payload }: PatchPasswordUserPayload) {
    return axios.patch(
      `${users}/${id}`,
      getPayloadJSON({
        operation: "password",
        data: payload,
      })
    );
  }

  return {
    patchPassword,
  };
}
