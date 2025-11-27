import { ReactNode } from "react";
import { UsersShape } from "../../types/Users";
import { PermissionsData } from "@type/Users/UsersGroup";

export type UserNavigationContextData = {
  userAuth: UsersShape;
  permissions: PermissionsData[];
  hasPermission: (required?: string[]) => boolean;
};

export type UserNavigationProps = {
  children: ReactNode;
  user?: UsersShape;
};
