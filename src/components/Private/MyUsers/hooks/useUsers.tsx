import { useEffect, useState } from "react";
import { ButtonConfig } from "../ButtonConfig";
import i18n from "@configs/i18n";
import { alterKeysObject } from "@helpers/object";
import { UsersShape } from "../../../../services/Users/Get/type";
import { StatusText } from "@components/shared/others/StatusText";

type Props = {
  users: Array<UsersShape>;
  filter: string;
  handleFilter: (userGroup: Record<string, unknown>) => boolean;
};

export function useUsers({ users: currentUsers, handleFilter, filter }: Props) {
  const [users, setUsers] = useState<Array<Record<string, unknown>>>([]);

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    setUsers(
      currentUsers
        .map((user) => {
          const newUser = {
            ...alterKeysObject(user, [
              "ID",
              i18n("words.name"),
              i18n("words.email"),
              i18n("words.phone"),
              i18n("words.status"),
              i18n("words.group"),
            ]),
            Status: <StatusText status={user.status} />,
          } as Record<string, unknown>;

          newUser[i18n("words.actions") as string] = (
            <ButtonConfig
              actions={[
                {
                  text: i18n("words.edit"),
                  handle: () => "",
                },
                {
                  text: i18n("words.exclude"),
                  handle: () => "",
                },
              ]}
            />
          );
          return newUser;
        })
        .filter((object) => handleFilter(object as UsersShape)) as UsersShape[]
    );
  }, [currentUsers, filter]);

  return {
    users,
  };
}
