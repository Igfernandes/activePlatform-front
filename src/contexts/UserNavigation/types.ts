import { ReactNode } from "react";
import { UsersShape } from "../../types/Users/Users";

export type UserNavigationContextData = {
  userAuth?: UsersShape;
};

export type UserNavigationProps = {
  children: ReactNode;
  user?: UsersShape;
};
