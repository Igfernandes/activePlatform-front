import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
import { FieldsShape, ScopeFields } from "../../../../types/Fields";
import { ViewedEntityShape } from "./context/types";

export type FormBuildProps = {
  handleShared: (entityId: number) => void;
  entity: ViewedEntityShape;
  fields: Array<FieldsShape>;
  groups: Array<FieldsGroupsShape>;
  entityType: ScopeFields;
};
