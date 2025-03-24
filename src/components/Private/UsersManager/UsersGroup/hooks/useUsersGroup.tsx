import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { StatusText } from "@components/shared/others/StatusText";
import {
  HookGroupsProps,
  ModalUserOperationType,
  TDataUserGroup,
} from "../../type";
import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";
import { useModalContext } from "@contexts/Modal";

export function useUsersGroup({ filter, handleFilter, data }: HookGroupsProps) {
  const { modal, handleToggleModal } =
    useModalContext<ModalUserOperationType>();
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    description,
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
              handle: () => handleToggleModal("DEFAULT_GROUP", userGroup.id),
            },
            {
              text: i18n("words.desative"),
              handle: () => handleToggleModal("DESATIVE_GROUP", userGroup.id),
            },
            {
              text: i18n("words.exclude"),
              handle: () => handleToggleModal("DELETE_GROUP", userGroup.id),
            },
          ]}
        />
      ),
    };

    return userGroupDataUpdated;
  };

  /** Adding news keys of table and the lasted column to table data usersGroup */
  useEffect(() => {
    const groups = data ?? [];
    const userGroupFiltered = groups.filter((data) => handleFilter(data));
    const tDataUserGroup = userGroupFiltered.map(updateUserGroupForTable);

    setTDataUsersGroup(tDataUserGroup);
  }, [data, filter]);

  return {
    tDataUsersGroup,
    tHeadUsersGroup,
    modal,
    handleToggleModal,
  };
}
