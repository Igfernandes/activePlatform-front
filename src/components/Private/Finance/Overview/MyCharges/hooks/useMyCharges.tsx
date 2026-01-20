import { useCallback, useEffect, useMemo, useState } from "react";

import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { HookFinancesProps } from "../../type";
import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { ChargesActions } from "../ChargesActions";
import { useModalContext } from "@contexts/Modal";
import { TDataCharges } from "../type";
import useDeleteCharges from "@services/Charges/Delete/useDelete";
import { Period } from "@type/status";
import { useI18n } from "@contexts/I18n";

export function useMyCharges({
  filter,
  handleFilter,
  charges,
}: HookFinancesProps<ChargeShape>) {
  const { t } = useI18n()
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);
  const [tDataCharges, setTDataCharges] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } = useModalContext();
  const { mutateAsync: deleteCharge, isPending: isLoading } = useDeleteCharges();

  const handleDeleteCharge = () => {
    deleteCharge({
      id: modal.id as number,
    }).then(() => {
      handleToggleModal(false);
    });
  };

  const tHeadsFinance = useMemo(() => [
    "ID",
    t("Words.name"),
    t("Words.type"),
    t("Words.status"),
    t("Words.clients_amount"),
    t("Words.actions"),
  ], [t]);

  const updateChargeForTable = useCallback(({
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
      type: t(`Words.${type?.toLowerCase()}`) as Period,
      status: (
        <span
          className={`font-semibold ${status === "ACTIVE" ? "text-emerald-600" : "text-red"
            }`}
        >
          {t(`Words.${status?.toLowerCase()}`)}
        </span>
      ),
      clients: clients?.length ?? 0,
      created_at: dayjs(created_at).format(t("Configs.format.date")),
      actions: <ChargesActions handleToggleModal={handleToggleModal} id={id} />,
    };
  }, [handleToggleModal, t]);

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
  }, [charges, filter, handleFilter, updateChargeForTable]);

  return {
    tHeadsFinance,
    setSelectors,
    selectors,
    tDataCharges,
    modal,
    handleToggleModal,
    handleDeleteCharge,
    isLoading,
  };
}
