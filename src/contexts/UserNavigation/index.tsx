import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserNavigationContextData, UserNavigationProps } from "./types";
import { UsersShape } from "../../types/Users";
import { useRouter } from "next/router";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { handleLogout } from "@helpers/handlers";
import { useQueryClient } from "@tanstack/react-query";
import useGetGroupsPermissions from "@services/Permissions/Groups/Get/useGet";
import { usePermissions } from "@hooks/usePermissions";
import useGetUser from "@services/Users/Get/useGetUser";

export const UserNavigationContext = createContext(
  {} as UserNavigationContextData
);

const UserNavigationProvider = ({ children, user }: UserNavigationProps) => {
  const [userAuth, setUserAuth] = useState<UsersShape>(user as UsersShape);
  const { data } = useGetUser({
    current: true,
  });
  const { data: groups, isFetched } = useGetGroupsPermissions({
    id: userAuth?.groups ? userAuth?.groups[0].id : 0,
  });
  const { permissions, setPermissions, hasPermission } = usePermissions();
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleDisconnect = useCallback(() => {
    handleLogout();
    queryClient.resetQueries({
      queryKey: ["userAuth"],
    });

    router.push(publicRoutes.login);
  }, [queryClient, router]);

  useEffect(() => {
    if (!isFetched || Object.values(user ?? {}).length > 0) return;

    if (data) setUserAuth(data);
    else handleDisconnect();
  }, [data, isFetched]);

  useEffect(() => {
    if (!Array.isArray(groups) || groups.length == 0) return;

    setPermissions(groups[0].permissions);
  }, [groups, setPermissions]);

  const userProps = useMemo(
    () => ({
      userAuth,
      permissions,
      hasPermission,
    }),
    [userAuth, permissions]
  );

  return (
    <UserNavigationContext.Provider value={userProps}>
      {children}
    </UserNavigationContext.Provider>
  );
};

export default UserNavigationProvider;

export function useUserNavigationContext() {
  return useContext(UserNavigationContext) as UserNavigationContextData;
}
