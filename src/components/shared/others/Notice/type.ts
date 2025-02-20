import { MouseEvent } from "react";

export type NoticeProps = {
  title: string;
  text: string;
  headerTitle: string;
  isActive?: boolean;
  onModal: (isShow: boolean) => void;
  isShowModal: boolean;
  onSubmit: (ev?: MouseEvent<HTMLButtonElement>) => void;
};
