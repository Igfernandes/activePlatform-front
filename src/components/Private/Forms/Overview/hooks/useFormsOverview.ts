import { useEffect, useState } from "react";
import { FormsShape } from "../../../../../types/Forms";
import { FormType, HookFormsProps } from "../../type";
import useGetForms from "../../../../../services/CustomForms/Get/useGetForms";
import { useModalContext } from "@contexts/Modal";
import useDeleteForm from "@services/CustomForms/Delete/useDelete";

export function useFormsOverview({
  handleFilter,
  filter,
}: HookFormsProps<FormsShape>) {
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

  const handleFilterForms = (formType: FormType, form: FormsShape) => {
    switch (formType) {
      case "OPENED":
        if (form.status === "DRAFT") return false;
        const notExpired =
          !form.expired_at || new Date(form.expired_at) > new Date();
        const hasStarted =
          !form.started_at || new Date(form.started_at) <= new Date();
        return notExpired && hasStarted;
        break;
      case "TERMINATED":
        if (form.status === "DRAFT") return true;

        return form.expired_at && new Date(form.expired_at) < new Date();
        break;
      case "RELEASES":
        if (form.status === "DRAFT") return false;
        return !form.started_at || new Date(form.started_at) >= new Date();
        break;
      default:
        return false;
    }
    setForms(formsData?.filter((form) => handleFilter(form)) || []);
  };

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData.filter((form) => handleFilter(form)));
  }, [formsData, filter]);

  return {
    forms,
    handleToggleStatusForm,
    isLoadingDeleteForm,
    handleFilterForms,
  };
}
