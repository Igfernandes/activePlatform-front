import i18n from "@configs/i18n";
import { useRef } from "react";

export function useClientsTable() {
  const tHeadsClient = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.phone"),
    i18n("Words.email"),
    i18n("Words.category"),
    i18n("Words.actions"),
  ]);

  return {
    tHeadsClient,
  };
}
