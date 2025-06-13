import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalFormsOperationType } from "./type";

type Props = {
  handleToggleModal: (
    type: ModalFormsOperationType,
    id?: string | number
  ) => void;
  formId: number;
  refPackage: string;
};

export function FillFieldsActions({
  handleToggleModal,
  formId,
  refPackage,
}: Props) {
  const router = useRouter();
  const { forms } = privateRoutes;

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: i18n("Words.edit"),
            handle: () => {
              router.push(`${forms}/${formId}/fill/${refPackage}`);
            },
          },
          {
            text: i18n("Words.exclude"),
            handle: () => handleToggleModal("DELETE", refPackage),
          },
        ]}
      />
    </div>
  );
}
