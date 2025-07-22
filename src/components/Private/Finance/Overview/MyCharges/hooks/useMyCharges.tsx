import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";

import { SelectorShape } from "@components/shared/layouts/Seletor/type";
import { HookFinancesProps } from "../../type";
import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { ChargesActions } from "../ChargesActions";
import { useModalContext } from "@contexts/Modal";
import { TDataCharges } from "../type";
import useDeleteCharges from "@services/Charges/Delete/useDelete";
import { Period } from "@type/status";

export function useMyCharges({
  filter,
  handleFilter,
  charges,
}: HookFinancesProps<ChargeShape>) {
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataCharges, setTDataCharges] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } = useModalContext();
  const { mutateAsync: deleteCharge, isPending } = useDeleteCharges();

  const handleDeleteCharge = () => {
    deleteCharge({
      id: modal.id as number,
    }).then(() => {
      handleToggleModal(false);
    });
  };

  const tHeadsFinance = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.type"),
    i18n("Words.status"),
    i18n("Words.clients_amount"),
    i18n("Words.actions"),
  ]);

  const updateChargeForTable = ({
    id,
    title,
    type,
    status,
    clients,
    created_at,
  }: ChargeShape): TDataCharges => {
    return {
      id,
      title,
      type: i18n(`Words.${type?.toLowerCase()}`) as Period,
      status: (
        <span
          className={`font-semibold ${
            status === "ACTIVE" ? "text-emerald-600" : "text-red"
          }`}
        >
          {i18n(`Words.${status?.toLowerCase()}`)}
        </span>
      ),
      clients: clients?.length ?? 0,
      created_at: dayjs(created_at).format(i18n("Configs.format.date")),
      actions: <ChargesActions handleToggleModal={handleToggleModal} id={id} />,
    };
  };

  useEffect(() => {
    if (!charges) return;

    const chargesFiltered = charges.filter((tDataClient) =>
      handleFilter(tDataClient)
    );

    setSelectors([
      ...chargesFiltered.map((charge) => ({
        value: charge.id.toString(),
        isChecked: false,
      })),
      {
        value: "all",
        isChecked: false,
      },
    ] as Array<SelectorShape>);

    const tDataClient = chargesFiltered.map((ClientProps) =>
      updateChargeForTable(ClientProps)
    );

    setTDataCharges(tDataClient);
  }, [charges, filter]);

  return {
    tHeadsFinance,
    setSelectors,
    selectors,
    tDataCharges,
    modal,
    handleToggleModal,
    handleDeleteCharge,
    isLoading: isPending,
  };
}
