import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";

export type ModalFormProps = {
  title: string;
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  groups: Array<UsersGroupShape>;
};
