import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { useUsersManager } from "@components/Private/UsersManager/hooks/useUsersManager";
import { ModalUserOperationType } from "@components/Private/UsersManager/type";
import { UsersManager } from "@components/Private/UsersManager";
import { OptionsBar } from "@components/Private/UsersManager/OptionsBar";

export default function Users() {
  const { handleSearch, search, filterObjects } = useSearch();
  const { groups } = useUsersManager();

  return (
    <DashboardContainer<ModalUserOperationType>>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <UsersManager
          search={search}
          filterObjects={filterObjects}
          groups={groups}
        />
      </div>
    </DashboardContainer>
  );
}
