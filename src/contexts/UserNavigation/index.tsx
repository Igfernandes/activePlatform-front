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
import { getCookie } from "cookies-next";
import { handleLogout } from "@helpers/handlers";
import { useQueryClient } from "@tanstack/react-query";
import { useJsonWebToken } from "@hooks/useJsonWebToken";
import useGetGroupsPermissions from "@services/Permissions/Groups/Get/useGet";
import { usePermissions } from "@hooks/usePermissions";

export const UserNavigationContext = createContext(
  {} as UserNavigationContextData
);

const UserNavigationProvider = ({ children }: UserNavigationProps) => {
  const [userAuth, setUserAuth] = useState<UsersShape>({} as UsersShape);
  const { data: groups } = useGetGroupsPermissions({
    id: userAuth?.groups ? userAuth?.groups[0].id : 0,
  });
  const { permissions, setPermissions, hasPermission } = usePermissions();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { verifyJwt } = useJsonWebToken();

  const handleDisconnect = useCallback(() => {
    handleLogout();
    queryClient.resetQueries({
      queryKey: ["userAuth"],
    });

    router.push(publicRoutes.login);
  }, [queryClient, router]);

  useEffect(() => {
    const userAuthCookie = getCookie("userAuth") as string;

    if (userAuthCookie)
      verifyJwt<UsersShape>(userAuthCookie)
        .then((user) => {
          setUserAuth(user);
        })
        .catch(() => handleDisconnect());
    else handleDisconnect();
  }, [verifyJwt, handleDisconnect]);

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
