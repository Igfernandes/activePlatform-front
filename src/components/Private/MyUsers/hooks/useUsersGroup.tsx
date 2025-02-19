import { useEffect, useState } from "react";
import { ButtonConfig } from "../ButtonConfig";
import i18n from "@configs/i18n";
import { UsersGroupShape } from "../../../../services/UsersGroup/Get/type";
import { alterKeysObject } from "@helpers/object";
import dayjs from "dayjs";
import { StatusText } from "@components/shared/others/StatusText";

type Props = {
  usersGroup: Array<UsersGroupShape>;
  filter: string;
  handleFilter: (userGroup: UsersGroupShape) => boolean;
};

export function useUsersGroup({
  usersGroup: currentUsersGroup,
  filter,
  handleFilter,
}: Props) {
  const [usersGroup, setUsersGroup] = useState<Array<UsersGroupShape>>([]);

  /** Adding news keys of table and the lasted column to table data usersGroup */
  useEffect(() => {
    setUsersGroup(
      currentUsersGroup
        .map((userGroup) => {
          const convertDate = dayjs(userGroup.created_at).format(
            i18n("configs.formats.datetime")
          );
          if (convertDate != "Invalid Date") userGroup.created_at = convertDate;

          const newUserGroup = {
            ...alterKeysObject(userGroup, [
              "ID",
              i18n("words.name"),
              i18n("words.status"),
              i18n("words.total"),
              i18n("words.created_date"),
            ]),
            Status: <StatusText status={userGroup.status} />,
          } as Record<string, unknown>;

          newUserGroup[i18n("words.actions") as string] = (
            <ButtonConfig
              actions={[
                {
                  text: i18n("words.edit"),
                  handle: () => "",
                },
                {
                  text: i18n("words.group_desative"),
                  handle: () => "",
                },
                {
                  text: i18n("words.exclude"),
                  handle: () => "",
                },
              ]}
            />
          );

          return newUserGroup;
        })
        .filter((object) =>
          handleFilter(object as UsersGroupShape)
        ) as UsersGroupShape[]
    );
  }, [currentUsersGroup, filter]);

  return {
    usersGroup,
  };
}
