import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
import { FieldsShape, ScopeFields } from "../../../../types/Fields";
import { PayloadFieldValues, ViewedEntityShape } from "./context/Fields/types";

export type FormBuildProps = {
  entity: ViewedEntityShape;
  fields: Array<FieldsShape>;
  groups: Array<FieldsGroupsShape>;
  entityType: ScopeFields;
  handleSubmitFields: (viewedId: number, payload: PayloadFieldValues) => void;
  handleUpdateClient: (isShow: boolean) => void;
};
