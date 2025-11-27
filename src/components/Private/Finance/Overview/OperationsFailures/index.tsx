import SelectorProvider from "@components/shared/layouts/Selector/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useOperationsFailures } from "./hooks/useOperationsFailures";
import { OperationFailuresStructProps } from "../type";
import i18n from "@configs/i18n";

export function OperationsFailures({
  filterObjects,
  search,
}: OperationFailuresStructProps) {
  const {
    selectors,
    setSelectors,
    tHeadsOperationsFailures,
    tDataOperationsFailures,
  } = useOperationsFailures({
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
            filters: {
              tag: {
                key: "status",
              },
            },
          }}
          data={tDataOperationsFailures}
          title={i18n("Words.operations_failures")}
          excludes={["created_at", "updated_at"]}
          tHeads={{
            data: tHeadsOperationsFailures.current,
            widths: [60, 166.5, 100, 300, 120, 48],
          }}
        />
      </SelectorProvider>
    </div>
  );
}
