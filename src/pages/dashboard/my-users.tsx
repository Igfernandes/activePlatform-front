import { Search } from "@components/shared/forms/Search";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { Table } from "@components/shared/layouts/Table";
import { Button } from "@components/utilities/Button";
import i18n from "@configs/i18n";
import { MOCK_USERS_GROUPS } from "../../data/users/__mocks__/usersGroups";
import { useUsersGroup } from "../../components/Private/MyUsers/hooks/useUsersGroup";
import { useUsers } from "@components/Private/MyUsers/hooks/useUsers";
import { MOCK_USERS } from "../../data/users/__mocks__";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";

export default function MyUsers() {
  const { handleSearch, search, filterObjects } = useSearch();
  const { usersGroup } = useUsersGroup({
    usersGroup: MOCK_USERS_GROUPS,
    filter: search,
    handleFilter: filterObjects,
  });
  const { users } = useUsers({
    users: MOCK_USERS,
    filter: search,
    handleFilter: filterObjects,
  });

  return (
    <DashboardContainer>
      <div>
        <div className="flex justify-between mb-6">
          <Search
            label={i18n("words.research")}
            dataTestId="users"
            handleSearch={handleSearch}
            className="w-[25%]"
          />
          <div className="w-[75%] flex justify-end">
            <div className="mx-2">
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl"
                text={i18n("words.create_user_groups")}
                type="button"
              />
            </div>
            <div className="mx-2">
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl"
                text={i18n("words.invite_users")}
                type="button"
              />
            </div>
          </div>
        </div>
        <div>
          <Table
            options={{
              pagination: {
                max: 5,
              },
              sort: {
                type: "ASC",
                reference: "name",
              },
            }}
            data={usersGroup}
            excludes={["updated_at"]}
            title={i18n("words.users_groups")}
            tHeads={{
              widths: [60, 291, 120, 100, 291, 48],
            }}
          />
        </div>
        <div>
          <Table
            options={{
              pagination: {
                max: 5,
              },
              sort: {
                type: "ASC",
                reference: "name",
              },
            }}
            data={users}
            title={i18n("words.users")}
            excludes={["created_at", "updated_at"]}
            tHeads={{
              widths: [60, 166.5, 166.5, 166.5, 120, 166.5, 48],
            }}
          />
        </div>
      </div>
    </DashboardContainer>
  );
}
