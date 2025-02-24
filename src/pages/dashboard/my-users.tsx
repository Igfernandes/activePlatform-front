import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { Users } from "@components/Private/MyUsers/Users";
import { ModalUsersOperationType } from "@components/Private/MyUsers/type";
import { OptionsBar } from "@components/Private/MyUsers/OptionsBar";

export default function MyUsers() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer<ModalUsersOperationType>>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <Users filterObjects={filterObjects} search={search} />
      </div>
    </DashboardContainer>
  );
}
