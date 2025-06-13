import i18n from "@configs/i18n";
import { ClientShape } from "@type/Clients";
import { useRef } from "react";

export function usePaymentsTable() {
  const tHeadsPayment = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.paid_amount"),
    i18n("Words.status"),
    i18n("Words.bank"),
    i18n("Words.actions"),
  ]);

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
