import { JSX } from "react";
import { ClientShape } from "../../../types/Clients";

export type HookClientsProps<ClientType> = {
  filter: string;
  handleFilter: (data: ClientType) => boolean;
};

export type TDataClient = {
  id: React.ReactNode;
  name: string;
  status: "ACTIVE" | "INACTIVE";
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
  | "IMPORT"
  | boolean;

export type ClientPageProps = {
  targetClient: ClientShape;
};
