import { JSX } from "react";

export type HookUsersProps<UserType> = {
  data: Array<UserType>;
  filter: string;
  handleFilter: (data: UserType) => boolean;
};

export type TDataUserGroup = {
  id: number;
  name: string;
  total: number;
  created_at: string;
  status: JSX.Element;
  actions: JSX.Element;
};

export type TDataUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  group: string;
  status: JSX.Element;
  actions: JSX.Element;
};

export type UsersStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalUsersGroupOperationType =
  | "DEFAULT"
  | "DELETE"
  | "DESATIVE"
  | boolean;
export type ModalUsersOperationType = "DEFAULT" | "DELETE" | boolean;

export type ModalState = {
  type?: ModalUsersOperationType;
  user?: number;
};

export type UsersGroupModaLState = Omit<ModalState, "type"> & {
  type?: ModalUsersGroupOperationType;
};
