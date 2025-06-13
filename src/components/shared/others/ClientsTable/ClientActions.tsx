import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";

type Props = {
  id: number;
};

export function ClientActions({ id }: Props) {
  const { handleToggleModal } = useModalContext();

  return (
    <div className="flex justify-end">
      <DotsOptions
        actions={[
          {
            text: i18n("Words.exclude"),
            handle: () => handleToggleModal("EXCLUDE", id),
          },
        ]}
      />
    </div>
  );
}
