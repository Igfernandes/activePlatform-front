import SelectorProvider from "@components/shared/layouts/Seletor/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useMyCharges } from "./hooks/useMyCharges";
import { FinancesStructProps } from "../type";
import { Selector } from "@components/shared/layouts/Seletor";
import i18n from "@configs/i18n";

export function MyCharges({ filterObjects, search }: FinancesStructProps) {
  const { selectors, setSelectors, tHeadsFinance } = useMyCharges({
    filter: search,
    handleFilter: filterObjects,
  });

  return (
    <div className="mt-6">
      <SelectorProvider selectors={selectors} setSelectors={setSelectors}>
        <SmartTable
          options={{
            pagination: {
              max: 4,
            },
            actions: [],
            buttons: (
              <Selector
                value={"all"}
                label={i18n(`words.select_all`)}
                textSize="text-[0px] md:text-lg"
              />
            ),
            filters: {
              tag: {
                key: "status",
              },
            },
          }}
          data={[]}
          title={i18n("words.my_charges")}
          excludes={["created_at", "updated_at"]}
          tHeads={{
            data: tHeadsFinance.current,
            widths: [60, 166.5, 120, 166.5, 166.5, 166.5, 48],
          }}
        />
      </SelectorProvider>
    </div>
  );
}
