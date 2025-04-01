import { FieldGroupsShape, FieldsShape } from "../../../../../types/Fields";

export type FieldContextData = {
  viewedField: ViewedEntityShape;
  handleChangeField: (field: FieldsShape) => void;
  handleChangeTab: (tabId: OptionsFieldTabTarget) => void;
  targetTab: OptionsFieldTabTarget;
  fields: FieldsShape[];
  fieldsGroup: FieldGroupsShape[];
  isShowModal: boolean;
  handleToggleModal: (isShowModal: boolean) => void;
};

export type OptionsFieldTabTarget = string | "ALL" | "FILES";

export type FieldProviderProps = {
  fieldsRelation: Array<FieldsShape>;
  entity: ViewedEntityShape;
  children: React.ReactNode;
};

export type ViewedEntityShape = {
  id: number;
  avatar?: string;
  name: string;
};
