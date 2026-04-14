import { DotsOptions } from "@components/shared/others/DotsOptions";
import { ModalClientsOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { useI18n } from "@contexts/I18n";
import { useCallback } from "react";
import usePatchClientStatus from "@services/Clients/PatchStatus/usePatch";

type Props = {
  handleToggleModal: (
    type: ModalClientsOperationType,
    id?: string | number
  ) => void;
  id: number;
  status?: string;
};

export function ClientActions({ handleToggleModal, id, status = "ACTIVE" }: Props) {
  const router = useRouter();
  const { t } = useI18n()
  const { clients } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();
  const { mutateAsync: patchClientStatus, } = usePatchClientStatus()
  const handleStatus = useCallback((id: number, status: string) => {
    patchClientStatus({ client_id: id, status: status === "ACTIVE" ? "INACTIVE" : "ACTIVE" })
  }, [patchClientStatus])

  return (
    <div className="flex">
      <Shared entity="CLIENTS" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: t("Words.edit") as string,
            handle: () => {
              router.push(`${clients}/${id}`);
            },
            permissions: [PERMISSIONS.clients.update],
          },
          {
            text: t("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.clients.delete],
          },
          {
            text: t(`Texts.${status === "ACTIVE" ? "client_inactive" : "client_active"}`) as string,
            handle: () => handleStatus(id, status),
            permissions: [PERMISSIONS.clients.update],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
