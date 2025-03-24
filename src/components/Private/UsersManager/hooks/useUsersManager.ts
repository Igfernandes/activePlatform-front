import { useEffect, useState } from "react";
import useGetGroups from "../../../../services/Users/Groups/Get/useGetGroups";
import { UsersGroupShape } from "../../../../types/Users/UsersGroup";

export function useUsersManager() {
  const { data: groupsData } = useGetGroups();
  const [groups, setGroups] = useState<Array<UsersGroupShape>>([]);

  useEffect(() => {
    setGroups(groupsData ?? []);
  }, [groupsData]);

  return {
    groups,
  };
}
