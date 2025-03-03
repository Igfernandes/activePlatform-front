import { FieldGroupsShape, FieldsShape } from "../../../../types/Fields";

export type FormBuildProps = {
  title: string;
  fields: Array<
    Omit<FieldsShape, "fieldScope" | "group" | "created_at" | "updated_at">
  >;
  fieldGroups: FieldGroupsShape[];
  isEditing?: boolean;
  handleEdit: (fieldGroupName: string) => void;
  onModal: (isShowModal: boolean) => void;
  isShowModal: boolean;
};
