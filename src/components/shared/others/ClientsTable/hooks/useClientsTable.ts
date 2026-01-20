import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

export function useClientsTable() {
  const { t } = useI18n();
  const tHeadsClient = useMemo(
    () => [
      "ID",
      t("Words.name"),
      t("Words.phone"),
      t("Words.email"),
      t("Words.category"),
      t("Words.actions"),
    ],
    [t],
  );
  return {
    tHeadsClient,
  };
}
