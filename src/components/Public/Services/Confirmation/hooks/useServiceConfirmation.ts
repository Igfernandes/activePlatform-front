import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import usePatchServiceIsConfirm from "@services/Clients/Services/PatchIsConfirmation/usePatch";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export function useServiceConfirmation() {
  const { mutateAsync: patchServiceIsConfirm } = usePatchServiceIsConfirm();
  const searchParams = useSearchParams();
  const { dispatchSnackbar } = useSnackbar();
  const router = useRouter();

  const handleConfirmInscribe = (isConfirmation: boolean) => {
    const serviceId = searchParams.get("key");
    const clientId = searchParams.get("client");

    if (serviceId == null || clientId == null)
      return dispatchSnackbar({
        message: i18n("Screens.service.confirmation.invalid_url"),
      });

    patchServiceIsConfirm({
      service_id: +serviceId,
      client_id: +clientId,
      is_confirm: isConfirmation,
    }).then(() => router.push("/services/successful"));
  };
  return {
    handleConfirmInscribe,
  };
}
