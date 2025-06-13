import { useEffect, useState } from "react";
import { FormsShape } from "../../../../../types/Forms";
import { HookFormsProps } from "../../type";
import useGetForms from "../../../../../services/CustomForms/Get/useGetForms";
import { useModalContext } from "@contexts/Modal";
import useDeleteForm from "@services/CustomForms/Delete/useDelete";

export function useFormsOverview({ handleFilter }: HookFormsProps<FormsShape>) {
  const [forms, setForms] = useState<FormsShape[]>([]);
  const { data: formsData } = useGetForms();
  const { mutateAsync: deleteForm, isPending: isLoadingDeleteForm } =
    useDeleteForm();
  const { modal, handleToggleModal } = useModalContext();

  const handleToggleStatusForm = () => {
    deleteForm({
      id: modal.id as number,
    }).then(() => handleToggleModal(false));
  };

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData.filter((form) => handleFilter(form)));
  }, [formsData]);

  return {
    forms,
    handleToggleStatusForm,
    isLoadingDeleteForm,
  };
}
