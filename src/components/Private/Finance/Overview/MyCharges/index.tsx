import SelectorProvider from "@components/shared/layouts/Selector/contexts";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useMyCharges } from "./hooks/useMyCharges";
import { HookFinancesProps } from "../type";
import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { ChargeShape } from "@type/Charges";

export function MyCharges({
  filter,
  handleFilter,
  charges,
}: HookFinancesProps<ChargeShape>) {
  const {
    selectors,
    setSelectors,
    tHeadsFinance,
    tDataCharges,
    handleToggleModal,
    modal,
    handleDeleteCharge,
    isLoading,
  } = useMyCharges({
    filter,
    handleFilter,
    charges,
  });

  return (
    <>
      <div className="mt-6 relative z-0">
        <SelectorProvider selectors={selectors} setSelectors={setSelectors}>
          <SmartTable
            options={{
              pagination: {
                max: 10,
              },
              filters: {
                tag: {
                  key: "type",
                },
              },
            }}
            data={tDataCharges}
            title={i18n("Words.my_charges")}
            excludes={["created_at", "updated_at"]}
            tHeads={{
              data: tHeadsFinance.current,
              widths: [60, 300, 100, 100, 100, 48],
            }}
          />
        </SelectorProvider>
      </div>
      <div className="relative z-10">
        <Notice
          headerTitle={i18n("Words.attention")}
          title={i18n("Screens.dashboard.finances.title_already_exclude")}
          text={i18n("Screens.dashboard.finances.text_already_exclude")}
          onSubmit={handleDeleteCharge}
          isShowModal={modal.type === "DELETE"}
          isLoading={isLoading}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
