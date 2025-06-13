import { useCallback, useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ModalFormsOperationType, TDataForms } from "../type";
import dayjs from "dayjs";
import { FormFillField } from "@type/Forms/FormsFill";
import { FillFieldsActions } from "../FillFieldsActions";
import useGetFillFields from "@services/Forms/Fills/Get/useGetFillFields";
import useDeleteFillField from "@services/Forms/Fills/Delete/useDelete";

type Props = {
  formId: number;
};

export function useFillFields({ formId }: Props) {
  const [tDataFields, setTDataFields] = useState<
    Array<Record<string, unknown>>
  >([]);
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { mutateAsync: deleteFillField, isPending: isLoadingFillFieldDelete } =
    useDeleteFillField();
  const { data: fieldsData } = useGetFillFields({ formId });

  const tHeadsFields = useRef<Array<string>>([
    "ID",
    i18n("Texts.first_column"),
    i18n("Words.created_at"),
    i18n("Words.actions"),
  ]);

  const updateFieldForTable = useCallback(
    ({ id, form_id, value, ref, created_at }: FormFillField): TDataForms => {
      return {
        id,
        value,
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:MM"),
        actions: (
          <FillFieldsActions
            handleToggleModal={handleToggleModal}
            formId={form_id}
            refPackage={ref}
          />
        ),
      };
    },
    [handleToggleModal]
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

    const tDataFields = fieldsData.map((FieldsProps) =>
      updateFieldForTable(FieldsProps[0])
    );
    setTDataFields(tDataFields);
  }, [fieldsData, updateFieldForTable]);

  return {
    tDataFields,
    tHeadsFields,
    handleDeleteFillField,
    isLoadingFillFieldDelete,
  };
}
