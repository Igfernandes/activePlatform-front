import { useModalContext } from "@contexts/Modal";
import { ModalFormsOperationType } from "../type";
import useDeleteFillField from "@services/Forms/Fills/Delete/useDelete";

type Props = {
  formId: number;
  serviceId: number;
};

export function useFillFieldsModal({ formId }: Props) {
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { mutateAsync: deleteFillField, isPending: isLoadingFillFieldDelete } =
    useDeleteFillField();

  const handleDeleteFillField = () => {
    const IdString = modal.id.toLocaleString();

    deleteFillField({
      form_id: formId,
      ref: IdString,
    }).then(() => {
      handleToggleModal(false);
    });
  };

  return {
    handleDeleteFillField,
    isLoadingFillFieldDelete,
  };
}
