import { FieldGroupsShape, FieldsShape } from "../../../../types/Fields";
import { UsersShape } from "../../../../types/Users/Users";

export type UserContextData = {
  viewedUser: UsersShape;
  handleChangeUser: (user: UsersShape) => void;
  handleChangeTab: (tabId: OptionsUserTabTarget) => void;
  targetTab: OptionsUserTabTarget;
  userFields: FieldsShape[];
  userFieldsGroup: FieldGroupsShape[];
  isShowModal: boolean;
  handleToggleModal: (isShowModal: boolean) => void;
};

export type OptionsUserTabTarget = string | "ALL" | "FILES";

export type UserProviderProps = {
  user: UsersShape;
  children: React.ReactNode;
};
