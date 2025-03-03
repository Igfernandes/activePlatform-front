import { FieldGroupsShape } from "../../../../../../types/Fields";

export type StoreFieldsModalProps = {
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  groups: FieldGroupsShape[];
};
