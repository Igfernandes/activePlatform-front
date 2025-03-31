import { FieldShape } from "../../type";

export type ModalProps = {
  children: React.ReactNode;
  title?: string;
  handleModal: (isShow: boolean) => void;
  isShowModal: boolean;
};

export type ModalState = {
  isShow: boolean;
  key: unknown;
};

export type PayloadUpdateField = Omit<
  FieldShape,
  "id" | "element" | "type" | "name" | "group"
>;
