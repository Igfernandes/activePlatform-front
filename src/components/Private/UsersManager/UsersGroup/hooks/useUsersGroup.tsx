import { useEffect, useRef, useState } from "react";
import { ButtonConfig } from "../../ButtonConfig";
import i18n from "@configs/i18n";
import { UsersGroupShape } from "../../../../../services/UsersGroup/Get/type";
import dayjs from "dayjs";
import { StatusText } from "@components/shared/others/StatusText";
import { HookUsersProps, TDataUserGroup } from "../../type";
import { useUsersGroupModal } from "./useUsersGroupModal";

export function useUsersGroup({
  data: currentUsersGroup,
  filter,
  handleFilter,
}: HookUsersProps<UsersGroupShape>) {
  const { handleToggleUsersGroupModal, usersGroupModal } = useUsersGroupModal();
  const [tDataUsersGroup, setTDataUsersGroup] = useState<Array<TDataUserGroup>>(
    []
  );
  const tHeadUsersGroup = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.status"),
    i18n("words.total"),
    i18n("words.created_date"),
    i18n("words.actions"),
  ]);

  const updateUserGroupForTable = ({
    created_at,
    ...userGroup
  }: UsersGroupShape): TDataUserGroup => {
    const convertDate = dayjs(created_at).format(
      i18n("configs.formats.datetime")
    );

    const userGroupDataUpdated = {
      ...userGroup,
      created_at: convertDate != "Invalid Date" ? convertDate : created_at,
      status: <StatusText status={userGroup.status} />,
      actions: (
        <ButtonConfig
          actions={[
            {
              text: i18n("words.edit"),
              handle: () =>
                handleToggleUsersGroupModal("DEFAULT", userGroup.id),
            },
            {
              text: i18n("words.group_desative"),
              handle: () =>
                handleToggleUsersGroupModal("DESATIVE", userGroup.id),
            },
            {
              text: i18n("words.exclude"),
              handle: () => handleToggleUsersGroupModal("DELETE", userGroup.id),
            },
          ]}
        />
      ),
    };

    return userGroupDataUpdated;
  };

  /** Adding news keys of table and the lasted column to table data usersGroup */
  useEffect(() => {
    const userGroupFiltered = currentUsersGroup.filter((data) =>
      handleFilter(data)
    );
    const tDataUserGroup = userGroupFiltered.map(updateUserGroupForTable);

    setTDataUsersGroup(tDataUserGroup);
  }, [currentUsersGroup, filter]);

  return {
    tDataUsersGroup,
    tHeadUsersGroup,
    usersGroupModal,
    handleToggleUsersGroupModal,
  };
}
