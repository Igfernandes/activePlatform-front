import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";

export type ModalFormProps = {
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  groups: UsersGroupShape[];
};
