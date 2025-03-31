import { JSX } from "react";
import { ServicesShape } from "../../../types/Services";
import { FormsShape } from "../../../types/Forms";

export type HookFormsProps<FormType> = {
  filter: string;
  handleFilter: (data: FormType) => boolean;
};

export type TDataServices = Omit<
  ServicesShape,
  "updated_at" | "description" | "reservations" | "privacy" | "photo"
> & {
  actions: JSX.Element;
};

export type FormsCardProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalFormsOperationType = "DESATIVE" | boolean;

export type FormsPageProps = {
  targetForm?: FormsShape;
};
