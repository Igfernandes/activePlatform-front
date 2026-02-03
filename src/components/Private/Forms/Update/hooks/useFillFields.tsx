import { useCallback, useEffect, useMemo, useState } from "react";
import { useModalContext } from "@contexts/Modal";
import { ModalFormsOperationType, TDataForms } from "../type";
import dayjs from "dayjs";
import { FormFillField } from "@type/Forms/FormsFill";
import { FillFieldsActions } from "../FillFieldsActions";
import useGetFillFields from "@services/Forms/Fills/Get/useGetFillFields";
import useDeleteFillField from "@services/Forms/Fills/Delete/useDelete";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import { useI18n } from "@contexts/I18n";

type Props = {
  formId: number;

  components: FieldShape[];
  eventId?: number;
};

export function useFillFields({ formId, components }: Props) {
  const { t } = useI18n()
  const [tDataFields, setTDataFields] = useState<
    Array<Record<string, unknown>>
  >([]);
  const [firstColumnId, setFirstColumn] = useState<string>();
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { mutateAsync: deleteFillField, isPending: isLoadingFillFieldDelete } =
    useDeleteFillField();
  const { data: fieldsData } = useGetFillFields({ formId });

  const tHeadsFields = useMemo<Array<string>>(() => [
    "ID",
    t("Texts.first_column"),
    t("Texts.inscribe_at"),
    t("Words.created_at"),
    t("Words.actions"),
  ], [t]);

  const handleChangeColumn = (fieldId: string) => setFirstColumn(fieldId);

  const updateFieldForTable = useCallback(
    ({
      id,
      form_id,
      value,
      ref,
      inscribed_at,
      created_at,
    }: FormFillField): TDataForms => {
      return {
        id,
        value: value.length > 40 ? value.slice(0, 40) + "..." : value,
        inscribe_at: inscribed_at ?? "",
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
    [handleToggleModal]
  );

  const handleDeleteFillField = useCallback(() => {
    const IdString = modal.id.toLocaleString();

    deleteFillField({
      form_id: formId,
      ref: IdString,
    }).then(() => {
      handleToggleModal(false);
    });
  }, [deleteFillField, formId, handleToggleModal, modal.id]);

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    if (!fieldsData) return;

    const nameColumn = components.find(
      (field) => field.element === "name" || field.label?.includes("nome")
    );

    if (nameColumn && !firstColumnId) {
      tHeadsFields[1] = t("Words.name");
      setFirstColumn(nameColumn.id);
    } else if (firstColumnId) {
      const field = components.find((field) => field.id == firstColumnId);
      tHeadsFields[1] = field?.label ?? "";
    } else tHeadsFields[1] = t("Texts.first_column");

    const tDataFields = fieldsData.map((FieldsProps) => {
      FieldsProps.sort((a, b) => a.field_id - b.field_id);
      const fieldProps = FieldsProps.find(
        (field) => field.field_id == +(firstColumnId ?? 0)
      );

      return updateFieldForTable(fieldProps ?? FieldsProps[0]);
    });
    setTDataFields(tDataFields);
  }, [
    fieldsData,
    updateFieldForTable,
    firstColumnId,
    components,
    tHeadsFields,
    t
  ]);

  return {
    tDataFields,
    tHeadsFields,
    handleDeleteFillField,
    isLoadingFillFieldDelete,
    fieldsData,
    handleChangeColumn,
  };
}
