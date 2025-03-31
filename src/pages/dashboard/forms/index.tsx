import { FormsCard } from "@components/Private/Forms/Overview/FormsCard";
import { OptionsBar } from "@components/Private/Forms/Overview/OptionsBar";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Forms() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <FormsCard filterObjects={filterObjects} search={search} />
      </div>
    </DashboardContainer>
  );
}
