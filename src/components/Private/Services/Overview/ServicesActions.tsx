import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalServicesOperationType } from "../type";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";

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
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit"),
            handle: () => router.push(`${services}/${id}`),
          },
          {
            text: i18n("Words.link_copy"),
            handle: () => handleCopy(`${baseUrl}/services?key=${id}`),
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
