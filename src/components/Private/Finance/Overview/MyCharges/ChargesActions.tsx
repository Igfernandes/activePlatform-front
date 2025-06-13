import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalServicesOperationType } from "@components/Private/Services/type";

type Props = {
  handleToggleModal: (
    type: ModalServicesOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function ChargesActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { finance } = privateRoutes;

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit"),
            handle: () => router.push(`${finance}/${id}`),
          },
          {
            text: i18n("Words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
          },
        ]}
      />
    </div>
  );
}
