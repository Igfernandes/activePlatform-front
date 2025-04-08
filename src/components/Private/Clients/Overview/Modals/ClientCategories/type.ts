import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { ClientCategoriesShape } from "../../../../../../types/Clients/ClientCategories";

export type ModalFormProps = {
  title: string;
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  categories?: ClientCategoriesShape[] | undefined;
  selectors: SelectorShape[];
};
