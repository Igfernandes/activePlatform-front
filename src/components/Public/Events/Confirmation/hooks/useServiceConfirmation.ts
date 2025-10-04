import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import usePatchIsConfirm from "@services/Clients/Events/PatchIsConfirmation/usePatch";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export function useServiceConfirmation() {
  const { mutateAsync: patchIsConfirm } = usePatchIsConfirm();
  const searchParams = useSearchParams();
  const { dispatchSnackbar } = useSnackbar();
  const router = useRouter();

  const handleConfirmInscribe = (isConfirmation: boolean) => {
    const eventId = searchParams.get("key");
    const clientId = searchParams.get("client");

    if (eventId == null || clientId == null)
      return dispatchSnackbar({
        message: i18n("Screens.event.confirmation.invalid_url"),
      });

    patchIsConfirm({
      event_id: +eventId,
      client_id: +clientId,
      is_confirm: isConfirmation,
    }).then(() =>
      router.push(
        "/events/" + (isConfirmation === true ? "successful" : "unsubscribe")
      )
    );
  };
  return {
    handleConfirmInscribe,
  };
}
