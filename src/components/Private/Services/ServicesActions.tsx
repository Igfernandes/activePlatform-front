import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalServicesOperationType } from "./type";

type Props = {
  handleToggleModal: (
    type: ModalServicesOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function ServicesActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { services } = privateRoutes;

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: i18n("words.edit"),
            handle: () => router.push(`${services}/${id}`),
          },
          {
            text: i18n("words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
          },
        ]}
      />
    </div>
  );
}
