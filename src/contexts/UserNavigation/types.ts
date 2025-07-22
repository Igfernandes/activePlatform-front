import { ReactNode } from "react";
import { UsersShape } from "../../types/Users";
import { PermissionsData } from "@type/Users/UsersGroup";

export type UserNavigationContextData = {
  userAuth: UsersShape;
  permissions: PermissionsData[];
  hasPermission: (
    userPermissions: Array<PermissionsData>,
    acceptPermissions: Array<string>
  ) => boolean;
};

export type UserNavigationProps = {
  children: ReactNode;
  user?: UsersShape;
};
