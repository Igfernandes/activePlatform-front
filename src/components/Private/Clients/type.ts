import { JSX } from "react";

export type HookClientsProps<ClientType> = {
  data: Array<ClientType>;
  filter: string;
  handleFilter: (data: ClientType) => boolean;
};

export type TDataClient = {
  id: React.ReactNode;
  name: string;
  identify: string;
  email: string;
  phone: string;
  category: string;
  actions: JSX.Element;
};

export type ClientsStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalClientsOperationType =
  | "CATEGORY"
  | "CLIENT"
  | "DELETE"
  | "SHARED"
  | "CHANGE_CATEGORY"
  | boolean;
