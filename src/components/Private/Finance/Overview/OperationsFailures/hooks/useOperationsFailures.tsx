import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";

import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { HookFinancesProps, TDataOperationsFailures } from "../../type";
import { OperationFailureShape } from "@type/OperationsFailures";
import useGetOperationsFailures from "@services/OperationsFailures/Get/useGet";
import { OperationsFailuresActions } from "../OperationsFailuresActions";

type Props = Pick<
  HookFinancesProps<OperationFailureShape>,
  "filter" | "handleFilter"
>;

export function useOperationsFailures({ filter, handleFilter }: Props) {
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataOperationsFailures, setTDataOperationsFailures] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { data: operationsFailuresData } = useGetOperationsFailures();

  const tHeadsOperationsFailures = useRef<Array<string>>([
    "ID",
    i18n("Words.operation_type"),
    i18n("Words.status"),
    i18n("Words.error_message"),
    i18n("Words.resolved_at"),
    i18n("Words.actions"),
  ]);
  const updateOperationsFailuresForTable = ({
    id,
    operation_type,
    status,
    error_message,
    resolved_at,
  }: OperationFailureShape): TDataOperationsFailures => {
    return {
      id,
      operation_type,
      status: i18n(`Words.${status.toLocaleLowerCase()}`),
      error: error_message,
      resolved_at: resolved_at,
      actions: <OperationsFailuresActions id={id} />,
    };
  };

  useEffect(() => {
    if (!operationsFailuresData) return;

    const operationsFailuresFiltered = operationsFailuresData.filter(
      (tDataOF) => handleFilter(tDataOF)
    );

    setSelectors([
      ...operationsFailuresFiltered.map((operationsFailures) => ({
        value: operationsFailures.id.toString(),
        isChecked: false,
      })),
      {
        value: "all",
        isChecked: false,
      },
    ] as Array<SelectorShape>);

    const tDataClient = operationsFailuresFiltered.map((ClientProps) =>
      updateOperationsFailuresForTable(ClientProps)
    );

    setTDataOperationsFailures(tDataClient);
  }, [operationsFailuresData, filter]);

  return {
    tHeadsOperationsFailures,
    setSelectors,
    selectors,
    tDataOperationsFailures,
  };
}
