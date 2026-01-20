import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalServicesOperationType } from "@components/Private/Services/type";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleToggleModal: (
    type: ModalServicesOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function ChargesActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { t } = useI18n()
  const { finance } = privateRoutes;

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: t("Words.edit"),
            handle: () => router.push(`${finance}/${id}`),
          },
          {
            text: t("Words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
          },
        ]}
      />
    </div>
  );
}
