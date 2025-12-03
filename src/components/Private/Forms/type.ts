import { JSX } from "react";
import { ServicesShape } from "../../../types/Services";
import { FormsShape } from "../../../types/Forms";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

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

export type ModalFormsOperationType = "EXCLUDE" | boolean;

export type FormsPageProps = {
  targetForm: FormsShape;
};

export type ComponentsProps = {
  form: FieldShape[];
  handleChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};

export type FormType = "OPENED" | "TERMINATED" | "RELEASES";
