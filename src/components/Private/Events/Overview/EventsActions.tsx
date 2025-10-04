import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalEventsOperationType } from "../type";

type Props = {
  handleToggleModal: (
    type: ModalEventsOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function EventsActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { events } = privateRoutes;

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit"),
            handle: () => router.push(`${events}/${id}`),
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
