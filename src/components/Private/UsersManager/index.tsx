import { UsersGroupShape } from "../../../types/Users/UsersGroup";
import { Invites } from "./Invites";
import { Users } from "./Users";
import { UsersGroup } from "./UsersGroup";

type Props = {
  groups: Array<UsersGroupShape>;
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export function UsersManager({ filterObjects, search, groups }: Props) {
  return (
    <div>
      <UsersGroup
        groups={groups}
        filterObjects={filterObjects}
        search={search}
      />
      <Users groups={groups} filterObjects={filterObjects} search={search} />
      <Invites filterObjects={filterObjects} search={search} />
    </div>
  );
}
