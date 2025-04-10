import { CardBoard } from "@components/shared/layouts/CardBoard";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { financeCardsBoard } from "../../../data/finance/cardsBoard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { OptionsBar } from "@components/Private/Finance/Overview/OptionsBar";
import { MyCharges } from "@components/Private/Finance/Overview/MyCharges";
import { ChargesExtract } from "@components/Private/Finance/Overview/ChargesExtract";

export default function Finance() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <CardBoard viewLimit={5} items={financeCardsBoard} />
        <MyCharges filterObjects={filterObjects} search={search} />
        <ChargesExtract filterObjects={filterObjects} search={search} />
      </div>
    </DashboardContainer>
  );
}
