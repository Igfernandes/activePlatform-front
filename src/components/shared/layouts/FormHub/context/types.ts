import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
import { FieldsShape, ScopeFields } from "../../../../../types/Fields";

export type FieldContextData = {
  viewedField: ViewedEntityShape;
  handleChangeField: (field: FieldsShape) => void;
  handleChangeTab: (tabId: OptionsFieldTabTarget) => void;
  targetTab: OptionsFieldTabTarget;
  fields: FieldsShape[];
  fieldsGroups: FieldsGroupsShape[];
  isShowModal: boolean;
  handleToggleModal: (isShowModal: boolean) => void;
  entityType: ScopeFields;
};

export type OptionsFieldTabTarget = string | "ALL" | "FILES";

export type FieldProviderProps = {
  fieldsRelation: Array<FieldsShape>;
  Groups: FieldsGroupsShape[];
  entity: ViewedEntityShape;
  children: React.ReactNode;
  entityType: ScopeFields;
};

export type ViewedEntityShape = {
  id: number;
  avatar?: string;
  name: string;
};
