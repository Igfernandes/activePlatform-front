import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

export type StoreFieldsModalProps = {
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  groups: FieldsGroupsShape[];
};
