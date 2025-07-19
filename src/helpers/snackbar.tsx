import SnackbarMessage from "@components/shared/others/SnackbarMessage";
import { createRoot } from "react-dom/client";

export function handleSnackbar(
  type: "success" | "error" | "notice",
  message: string
) {
  if (!document || document.querySelector("[data-snackbar='container']"))
    return;

  const snackbarContainer = document.createElement("div");

  snackbarContainer.setAttribute("data-snackbar", "container");
  document.body.appendChild(snackbarContainer);

  const rootSnackbar = createRoot(snackbarContainer);
  const snackbarTime = new Date(Date.now());
  snackbarTime.setSeconds(snackbarTime.getSeconds() + 4);

  rootSnackbar.render(
    <SnackbarMessage
      snackbar={{
        timestamp: snackbarTime,
        type,
        message,
      }}
    />
  );

  setTimeout(() => {
    snackbarContainer.remove();
  }, 4000);
}
