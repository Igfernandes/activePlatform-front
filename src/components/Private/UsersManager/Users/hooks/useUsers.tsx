import { useEffect, useRef, useState } from "react";
import { ButtonConfig } from "../../ButtonConfig";
import i18n from "@configs/i18n";
import { UsersShape } from "../../../../../services/Users/Get/type";
import { StatusText } from "@components/shared/others/StatusText";
import { HookUsersProps, TDataUser } from "../../type";
import { useUsersModal } from "./useUsersModal";

export function useUsers({
  data: currentUsers,
  handleFilter,
  filter,
}: HookUsersProps<UsersShape>) {
  const { handleToggleUsersModal, usersModal } = useUsersModal();
  const [tDataUsers, setTDataUsers] = useState<Array<Record<string, unknown>>>(
    []
  );
  const tHeadsUser = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.email"),
    i18n("words.phone"),
    i18n("words.status"),
    i18n("words.group"),
    i18n("words.actions"),
  ]);

  const updateUserForTable = (user: UsersShape): TDataUser => {
    const userDataUpdated = {
      ...user,
      status: <StatusText status={user.status} />,
      actions: (
        <ButtonConfig
          actions={[
            {
              text: i18n("words.edit"),
              handle: () => handleToggleUsersModal("DEFAULT", user.id),
            },
            {
              text: i18n("words.exclude"),
              handle: () => handleToggleUsersModal("DELETE", user.id),
            },
          ]}
        />
      ),
    };

    return userDataUpdated;
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    const usersFiltered = currentUsers.filter((tDataUser) =>
      handleFilter(tDataUser)
    );
    const tDataUser = usersFiltered.map(updateUserForTable);

    setTDataUsers(tDataUser);
  }, [currentUsers, filter]);

  return {
    tDataUsers,
    tHeadsUser,
    handleToggleUsersModal,
    usersModal,
  };
}
