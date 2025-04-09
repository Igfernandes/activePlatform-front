import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutUsersPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePuttUsersService() {
  const { axios } = useAxios();
  const { users } = API_ROUTES;

  async function putUsers({ id, ...payload }: PutUsersPayload) {
    return axios.put(`${users}/${id}`, getPayloadJSON(payload));
  }

  return {
    putUsers,
  };
}
