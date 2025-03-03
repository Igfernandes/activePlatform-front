import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  OptionsUserTabTarget,
  UserContextData,
  UserProviderProps,
} from "./types";
import { UsersShape } from "../../../../types/Users/Users";
import { FieldGroupsShape, FieldsShape } from "../../../../types/Fields";
import { MOCK_USER_FIELDS } from "../../../../data/users/__mocks__/usersFields";
import { MOCK_USER_FIELDS_GROUP } from "../../../../data/users/__mocks__/usersFieldsGroup";

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({ children, user }: UserProviderProps) {
  const [viewedUser, setViewedUser] = useState(user);
  const [targetTab, setTargetTab] = useState<OptionsUserTabTarget>("ALL");
  const [userFields, setUserField] = useState<FieldsShape[]>([]);
  const [userFieldsGroup, setUserFieldsGroup] = useState<FieldGroupsShape[]>(
    []
  );
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleChangeUser = (user: UsersShape) => {
    setViewedUser(user);
  };

  const handleChangeTab = (tab: OptionsUserTabTarget) => {
    setTargetTab(tab);
  };
  const handleToggleModal = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  useEffect(() => {
    handleChangeUser(user);
  }, [user]);

  useEffect(() => {
    setUserField(
      MOCK_USER_FIELDS.filter((field) => field.fieldScope === "USER")
    );
    setUserFieldsGroup(MOCK_USER_FIELDS_GROUP);
  }, []);

  const tabProps = useMemo(
    () => ({
      targetTab,
      handleChangeTab,
    }),
    [targetTab]
  );

  const modalProps = useMemo(
    () => ({
      isShowModal,
      handleToggleModal,
    }),
    [isShowModal]
  );

  const props = useMemo(
    () => ({
      viewedUser,
      handleChangeUser,
      userFields,
      userFieldsGroup,
    }),
    [viewedUser, userFields, userFieldsGroup]
  );

  return (
    <UserContext.Provider value={{ ...props, ...tabProps, ...modalProps }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

export function useUserContext() {
  return useContext(UserContext) as UserContextData;
}
