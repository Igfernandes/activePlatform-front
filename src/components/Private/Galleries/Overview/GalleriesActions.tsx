import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { ModalGalleryOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { PERMISSIONS } from "@constants/permissions";
import { useUserNavigationContext } from "@contexts/UserNavigation";

type Props = {
  handleToggleModal: (
    type: ModalGalleryOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function GalleriesActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { galleries } = privateRoutes;
  const { hasPermission } = useUserNavigationContext();

  return (
    <div className="flex">
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit") as string,
            handle: () => {
              router.push(`${galleries}/${id}`);
            },
            permissions: [PERMISSIONS.galleries.update],
          },
          {
            text: i18n("Words.exclude") as string,
            handle: () => handleToggleModal("DELETE", id),
            permissions: [PERMISSIONS.galleries.delete],
          },
        ].filter((action) => hasPermission(action.permissions))}
      />
    </div>
  );
}
