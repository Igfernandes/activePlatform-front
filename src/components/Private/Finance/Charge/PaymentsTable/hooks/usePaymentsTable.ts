import { useI18n } from "@contexts/I18n";
import { ClientShape } from "@type/Clients";
import { useMemo } from "react";

export function usePaymentsTable() {
  const {t } = useI18n()
  const tHeadsPayment = useMemo(() => [
    "ID",
    t("Words.name"),
    t("Words.paid_amount"),
    t("Words.status"),
    t("Words.bank"),
    t("Words.actions"),
  ], [t]);

  const getClientName = (
    clients: Array<ClientShape>,
    clientCurrentId: number
  ) => {
    return clients.find((client) => client.id === clientCurrentId)?.name;
  };

  return {
    tHeadsPayment,
    getClientName,
  };
}
