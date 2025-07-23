import { useCallback, useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ModalFormsOperationType, TDataForms } from "../type";
import dayjs from "dayjs";
import { FormFillField } from "@type/Forms/FormsFill";
import { FillFieldsActions } from "../FillFieldsActions";
import useGetFillFields from "@services/Forms/Fills/Get/useGetFillFields";
import useDeleteFillField from "@services/Forms/Fills/Delete/useDelete";
import useGetClientsServices from "@services/Clients/Services/Get/useGet";
import { ClientServiceShape } from "@type/Clients/ClientService";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

type Props = {
  formId: number;

  components: FieldShape[];
  serviceId?: number;
};

export function useFillFields({ formId, serviceId, components }: Props) {
  const [tDataFields, setTDataFields] = useState<
    Array<Record<string, unknown>>
  >([]);
  const [firstColumnId, setFirstColumn] = useState<string>();
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { mutateAsync: deleteFillField, isPending: isLoadingFillFieldDelete } =
    useDeleteFillField();
  const { data: fieldsData } = useGetFillFields({ formId });
  const { data: clientsService } = useGetClientsServices({
    serviceId: serviceId ?? 0,
  });

  const tHeadsFields = useRef<Array<string>>([
    "ID",
    i18n("Texts.first_column"),
    i18n("Texts.inscribe_at"),
    i18n("Words.created_at"),
    i18n("Words.actions"),
  ]);

  const handleChangeColumn = (fieldId: string) => setFirstColumn(fieldId);

  const updateFieldForTable = useCallback(
    ({
      id,
      form_id,
      value,
      ref,
      created_at,
      client_id,
    }: FormFillField): TDataForms => {
      const inscribedService = clientsService?.find(
        (clientsService: ClientServiceShape) =>
          clientsService.service.id === serviceId &&
          clientsService.id == client_id
      );

      const serviceName = inscribedService?.service
        ? inscribedService?.service.name
        : "";

      return {
        id,
        value: value.length > 40 ? value.slice(0, 40) + "..." : value,
        inscribe_at: serviceName,
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm:ss"),
        actions: (
          <FillFieldsActions
            handleToggleModal={handleToggleModal}
            formId={form_id}
            refPackage={ref}
            fieldId={id}
          />
        ),
      };
    },
    [handleToggleModal, firstColumnId, clientsService]
  );

  const handleDeleteFillField = () => {
    const IdString = modal.id.toLocaleString();

    deleteFillField({
      form_id: formId,
      ref: IdString,
    }).then(() => {
      handleToggleModal(false);
    });
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    if (!fieldsData) return;

    if (firstColumnId) {
      const field = components.find((field) => field.id == firstColumnId);
      tHeadsFields.current[1] = field?.label ?? "";
    } else tHeadsFields.current[1] = i18n("Texts.first_column");

    const tDataFields = fieldsData.map((FieldsProps) => {
      const fieldProps = FieldsProps.find(
        (field) => field.field_id == +(firstColumnId ?? 0)
      );

      return updateFieldForTable(fieldProps ?? FieldsProps[0]);
    });
    setTDataFields(tDataFields);
  }, [fieldsData, updateFieldForTable, firstColumnId, components]);

  return {
    tDataFields,
    tHeadsFields,
    handleDeleteFillField,
    isLoadingFillFieldDelete,
    fieldsData,
    handleChangeColumn,
  };
}
