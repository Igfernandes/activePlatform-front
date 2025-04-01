import { ClientCategoriesShape } from "../../../../../../types/Clients/ClientCategories";

export type ModalFormProps = {
  title: string;
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  categories?: ClientCategoriesShape[];
};
