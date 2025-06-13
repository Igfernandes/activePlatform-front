import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalMessagesDispatcherOperationType } from "./type";

type Props = {
  handleToggleModal: (
    type: ModalMessagesDispatcherOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function NotificationsActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { dispatcher } = privateRoutes;

  return (
    <div className="flex justify-center">
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit"),
            handle: () => router.push(`${dispatcher}/${id}`),
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
