import useGetUsersInvite from "@services/Invites/Get/Users/useGet";
import useGetUsers from "@services/Users/Get/useGetUsers";
import { InvitesShape } from "@type/Invites";
import { useEffect, useState } from "react";

export function useUsersData() {
  const { data: users } = useGetUsers();
  const { data: invites } = useGetUsersInvite();
  const [invitesValid, setInvitesValid] = useState<Array<InvitesShape>>([]);

  useEffect(() => {
    if (!invites) return;

    setInvitesValid(invites.filter((invite) => invite.is_valid));
  }, [invites]);

  return {
    users,
    invites,
    invitesValid,
  };
}
