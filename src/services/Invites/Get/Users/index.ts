import { API_ROUTES } from "@configs/routes/Api/api";
import { GetInvitesRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { InvitesShape } from "../../../../types/Invites/invites";

export default function useGet() {
  const { inviteUser } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getInvites(request?: GetInvitesRequest) {
    const { ...query } = request ?? {};
    return await axios.get<InvitesShape[]>(
      setQueries({
        url: setParams({ url: inviteUser }),
        query,
      })
    );
  }

  return {
    getInvites,
  };
}
