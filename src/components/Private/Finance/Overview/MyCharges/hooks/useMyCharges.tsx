import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";

import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { HookFinancesProps } from "../../type";
import { ChargesShape } from "@type/Charges";

export function useMyCharges({filter, handleFilter}: HookFinancesProps<ChargesShape>) {
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataCharges, setTDataCharges] = useState<
    Array<Record<string, unknown>>
  >([]);

  const tHeadsFinance = useRef<Array<string>>([
    "ID",
    i18n("words.service"),
    i18n("words.type"),
    i18n("words.status"),
    i18n("words.clients_amount"),
    i18n("words.actions"),
  ]);

  // useEffect(() => {
  //   if (!charges) return;

  //   const chargesFiltered = charges.filter((tDataClient) =>
  //     handleFilter(tDataClient)
  //   );

  //   setSelectors([
  //     ...chargesFiltered.map((charge) => ({
  //       value: charge.id.toString(),
  //       isChecked: false,
  //     })),
  //     {
  //       value: "all",
  //       isChecked: false,
  //     },
  //   ] as Array<SelectorShape>);

  //   const tDataClient = chargesFiltered.map((ClientProps) =>
  //     updateChargeForTable(ClientProps)
  //   );

  //   setTDataCharges(tDataClient);
  // }, [charges, filter]);

  return {
    tHeadsFinance,
    setSelectors,
    selectors,
    tDataCharges
  };
}
