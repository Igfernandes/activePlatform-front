import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UserNavigationContextData, UserNavigationProps } from "./types";
import { UsersShape } from "../../types/Users";
import useGetUserAuth from "../../services/Users/GetAuth/useGetUser";
import { useRouter } from "next/router";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { getCookie } from "cookies-next";
import { handleLogout } from "@helpers/handlers";
import { useQueryClient } from "@tanstack/react-query";
import { jsonWebToken } from "@helpers/JsonWebToken";

export const UserNavigationContext = createContext(
  {} as UserNavigationContextData
);

const UserNavigationProvider = ({ children }: UserNavigationProps) => {
  const [userAuth, setUserAuth] = useState<UsersShape>();
  const tokenNavigation = useRef("");
  const { data, isFetched, error } = useGetUserAuth({
    tokenNavigation: tokenNavigation.current as string,
  });
  const router = useRouter();
  const queryClient = useQueryClient();
  const { verifyJwt } = jsonWebToken();

  const handleDisconnect = () => {
    handleLogout();
    queryClient.resetQueries({
      queryKey: ["userAuth"],
    });

    router.push(publicRoutes.login);
  };

  useEffect(() => {
    tokenNavigation.current = getCookie("token_navigation") as string;
  }, []);

  useEffect(() => {
    const userAuthCookie = getCookie("userAuth") as string;

    if (data) {
      setUserAuth(data);
      return;
    }

    if (error instanceof Error) {
      handleDisconnect();
      return;
    }

    if (userAuthCookie)
      verifyJwt<UsersShape>(userAuthCookie).then((user) => {
        setUserAuth(user);
      });
  }, [isFetched, data, error]);

  const userProps = useMemo(
    () => ({
      userAuth,
    }),
    [userAuth]
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
