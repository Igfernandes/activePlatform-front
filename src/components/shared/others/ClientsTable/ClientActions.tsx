import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useModalContext } from "@contexts/Modal";
import { useRouter } from "next/router";

type Props = {
  id: number;
};

export function ClientActions({ id }: Props) {
  const { handleToggleModal } = useModalContext();
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <DotsOptions
        actions={[
          {
            text: i18n("Words.exclude"),
            handle: () => handleToggleModal("EXCLUDE", id),
          },
          {
            text: i18n("Words.see_client"),
            handle: () => router.push(`${privateRoutes.clients}/${id}`),
          },
        ]}
      />
    </div>
  );
}
