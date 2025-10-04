import { EventsTable } from "@components/Private/Events/Overview/EventsTable";
import { OptionsBar } from "@components/Private/Events/Overview/OptionsBar";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Events() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <EventsTable filterObjects={filterObjects} search={search} />
      </div>
    </DashboardContainer>
  );
}
