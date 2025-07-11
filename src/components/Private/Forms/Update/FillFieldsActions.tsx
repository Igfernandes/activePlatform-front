import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ModalFormsOperationType } from "./type";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { ActionsData } from "@components/shared/others/DotsOptions/type";
import usePostInscribesServices from "@services/Forms/Services/Post/usePost";
import { useSnackbar } from "@hooks/useSnackbar";
import { Shared } from "@components/shared/others/Shared";

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
  const [actions, setActions] = useState<Array<ActionsData>>([]);
  const { mutateAsync: postInscribeServices } = usePostInscribesServices();

  useEffect(() => {
    const data = [
      {
        text: i18n("Words.edit") as string,
        handle: () => {
          router.push(`${forms}/${formId}/fill/${refPackage}`);
        },
      },
    ];

    if (serviceId)
      data.push({
        text: i18n("Words.inscribe") as string,
        handle: () => {
          dispatchSnackbar({
            message: i18n("Screens.dashboard.services.awaiting_inscribe"),
            type: "notice",
          });
          postInscribeServices({
            serviceId: watch("service_id"),
            formPackage: refPackage,
          });
        },
      });

    data.push({
      text: i18n("Words.exclude") as string,
      handle: () => handleToggleModal("DELETE", refPackage),
    });

    setActions(data);
  }, [serviceId, formId, refPackage, forms]);

  return (
    <div className="flex">
      <Shared entity={"FORMS_FILLS"} in_ids={[fieldId]} />
      <DotsOptions actions={actions} />
    </div>
  );
}
