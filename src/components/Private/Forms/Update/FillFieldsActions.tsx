import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalFormsOperationType } from "./type";
import { useFormContext } from "react-hook-form";
import { useMemo } from "react";
import { useSnackbar } from "@hooks/useSnackbar";
import { Shared } from "@components/shared/others/Shared";
import usePostInscribesEvents from "@services/Forms/Events/Post/usePost";

type Props = {
  handleToggleModal: (
    type: ModalFormsOperationType,
    id?: string | number
  ) => void;
  formId: number;
  refPackage: string;
  fieldId: number;
};

export function FillFieldsActions({
  handleToggleModal,
  formId,
  refPackage,
  fieldId,
}: Props) {
  const router = useRouter();
  const { forms } = privateRoutes;
  const { watch } = useFormContext();
  const serviceId = watch("service_id");
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: postInscribeServices } = usePostInscribesEvents();
  const data = useMemo(() => [
    {
      text: i18n("Words.edit") as string,
      handle: () => {
        router.push(`${forms}/${formId}/fill/${refPackage}`);
      },
    },
  ], [formId, refPackage, forms, router]);

  const actions = useMemo(() => {
    data.push({
      text: i18n("Words.exclude") as string,
      handle: () => handleToggleModal("DELETE", refPackage),
    });

    if (!serviceId)
      return data;

    data.push({
      text: i18n("Words.inscribe") as string,
      handle: () => {
        dispatchSnackbar({
          message: i18n("Screens.dashboard.services.awaiting_inscribe"),
          type: "notice",
        });
        postInscribeServices({
          formPackage: refPackage,
        });
      },
    });

    return data;
  }, [serviceId, data, refPackage, handleToggleModal, dispatchSnackbar, postInscribeServices]);

  return (
    <div className="flex">
      <Shared entity={"FORMS_FILLS"} in_ids={[fieldId]} />
      <DotsOptions actions={actions} />
    </div>
  );
}
