import { FieldsShape } from "../../../../types/Fields";
import { ViewedEntityShape } from "./context/types";

export type FormBuildProps = {
  handleShared: (entityId: number) => void;
  handleCreated: (entityId: number) => void;
  entity: ViewedEntityShape;
  fields: Array<FieldsShape>;
};
