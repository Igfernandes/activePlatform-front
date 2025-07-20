import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { ModalClientsOperationType } from "../type";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";

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

  return (
    <div className="flex">
      <Shared entity="CLIENTS" in_ids={[id]} />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit"),
            handle: () => {
              router.push(`${clients}/${id}`);
            },
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
