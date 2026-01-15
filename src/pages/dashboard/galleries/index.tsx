
import { OptionsBar } from "@components/Private/Galleries/Overview/OptionsBar";
import { GalleriesTable } from "@components/Private/Galleries/Overview/Galleries";
import { ModalGalleryOperationType } from "@components/Private/Galleries/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";

export default function Galleries() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer<ModalGalleryOperationType>>
      <OptionsBar handleSearch={handleSearch}  />
      <GalleriesTable search={search} filterObjects={filterObjects} />
    </DashboardContainer>
  );
}

