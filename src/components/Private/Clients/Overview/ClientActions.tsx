import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { ModalClientsOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";

type Props = {
  handleToggleModal: (
    type: ModalClientsOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function ClientActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { clients } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <Shared entity="CLIENTS" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit") as string,
            handle: () => {
              router.push(`${clients}/${id}`);
            },
            permissions: [PERMISSIONS.clients.update],
          },
          {
            text: i18n("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.clients.delete],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
