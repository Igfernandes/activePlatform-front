import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserNavigationContextData, UserNavigationProps } from "./types";
import { UsersShape } from "../../types/Users";
import { usePermissions } from "@hooks/usePermissions";
import useGetUser from "@services/Users/Get/useGetUser";

export const UserNavigationContext = createContext(
  {} as UserNavigationContextData
);

const UserNavigationProvider = ({ children, user }: UserNavigationProps) => {
  const [userAuth, setUserAuth] = useState<UsersShape>(user as UsersShape);
  const { data: currentUser } = useGetUser({ current: true });
  const { permissions, setPermissions, hasPermission } = usePermissions();

  // Atualiza usuário quando data chega
  useEffect(() => {
    if (currentUser) {
      setUserAuth(currentUser);
      setPermissions(currentUser.permissions || []);
    }
  }, [currentUser, setPermissions]);

  const value = useMemo(
    () => ({
      userAuth,
      permissions,
      hasPermission,
    }),
    [userAuth, permissions, hasPermission]
  );

  return (
    <UserNavigationContext.Provider value={value}>
      {children}
    </UserNavigationContext.Provider>
  );
};

export default UserNavigationProvider;

export function useUserNavigationContext() {
  return useContext(UserNavigationContext);
}
