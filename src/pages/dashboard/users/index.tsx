import { Search } from "@components/shared/forms/Search";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { UsersGroup } from "@components/Private/UsersManager/UsersGroup";
import { Users } from "@components/Private/UsersManager/Users";
import { ModalFormUsers } from "@components/Private/UsersManager/Modals/Users";
import { useUsersManager } from "@components/Private/UsersManager/hooks/useUsersManager";
import { ModalFormUsersGroup } from "@components/Private/UsersManager/Modals/UsersGroup";

export default function UsersManager() {
  const { handleSearch, search, filterObjects } = useSearch();
  const {
    handleToggleUsersModal,
    usersModal,
    handleToggleUsersGroupModal,
    usersGroupModal,
  } = useUsersManager();

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
                onClick={() => handleToggleUsersGroupModal(true)}
              />
            </div>
            <div className="mx-2">
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl"
                text={i18n("words.invite_users")}
                type="button"
                onClick={() => handleToggleUsersModal(true)}
              />
            </div>
          </div>
        </div>
        <UsersGroup filterObjects={filterObjects} search={search} />
        <Users filterObjects={filterObjects} search={search} />
        <>
          <ModalFormUsers
            title={i18n("words.new_user")}
            isShowModal={usersModal.isShow}
            onModal={handleToggleUsersModal}
          />
          <ModalFormUsersGroup
            onModal={handleToggleUsersGroupModal}
            isShowModal={usersGroupModal.isShow}
          />
        </>
      </div>
    </DashboardContainer>
  );
}
