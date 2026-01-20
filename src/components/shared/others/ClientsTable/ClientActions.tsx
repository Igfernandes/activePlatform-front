import { DotsOptions } from "@components/shared/others/DotsOptions";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useModalContext } from "@contexts/Modal";
import { useRouter } from "next/router";

type Props = {
  id: number;
};

export function ClientActions({ id }: Props) {
  const { t } = useI18n()
  const { handleToggleModal } = useModalContext();
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <DotsOptions
        actions={[
          {
            text: t("Words.exclude"),
            handle: () => handleToggleModal("EXCLUDE", id),
          },
          {
            text: t("Words.see_client"),
            handle: () => router.push(`${privateRoutes.clients}/${id}`),
          },
        ]}
      />
    </div>
  );
}
