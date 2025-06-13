import { useState } from "react";
import { useSnackbar } from "./useSnackbar";
import i18n from "@configs/i18n";

export function useNavigator() {
  const [isCopied, setIsCopied] = useState(false);
  const { dispatchSnackbar } = useSnackbar();

  const handleCopy = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
      dispatchSnackbar({
        type: "notice",
        title: `${i18n("Words.link_copied")}`,
        message: i18n("Words.copied_success"),
      });
      setTimeout(() => setIsCopied(false), 2000); // Feedback por 2 segundos
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return {
    isCopied,
    handleCopy,
  };
}
