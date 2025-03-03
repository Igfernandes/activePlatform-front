import { JSX } from "react";
import { ServicesShape } from "../../../types/Services";

export type HookServicesProps<ServiceType> = {
  data: Array<ServiceType>;
  filter: string;
  handleFilter: (data: ServiceType) => boolean;
};

export type TDataServices = Omit<
  ServicesShape,
  "updated_at" | "responsible"
> & {
  responsible: string;
  actions: JSX.Element;
};

export type ServicesProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalServicesOperationType = "DELETE" | boolean;
