import { JSX } from "react";

export type HookFinancesProps<ClientType> = {
  filter: string;
  handleFilter: (data: ClientType) => boolean;
};

export type TDataFinance = {
  id: React.ReactNode;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  email: string;
  phone: string;
  category: string;
  actions: JSX.Element;
};

export type FinancesStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalFinancesOperationType =
  | "CATEGORY"
  | "CLIENT"
  | "DELETE"
  | "SHARED"
  | "CHANGE_CATEGORY"
  | boolean;
