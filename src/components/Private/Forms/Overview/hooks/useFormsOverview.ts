import { useEffect, useState } from "react";
import { FormsShape } from "../../../../../types/Forms";
import { HookFormsProps } from "../../type";
import useGetForms from "../../../../../services/Forms/Get/useGetForms";
import { useSnackbar } from "@hooks/useSnackbar";
import i18n from "@configs/i18n";
import usePatchStatusForms from "../../../../../services/Forms/Patch/Status/usePatchStatus";
import { useModalContext } from "@contexts/Modal";

export function useFormsOverview({ handleFilter }: HookFormsProps<FormsShape>) {
  const [forms, setForms] = useState<FormsShape[]>([]);
  const { data: formsData } = useGetForms();
  const { dispatchSnackbar } = useSnackbar();
  const { mutateAsync: patchForm } = usePatchStatusForms();
  const { modal } = useModalContext();

  const handleCopy = (link: string) => {
    const domain = window.location.origin;

    navigator.clipboard.writeText(`${domain}/${link}`).then(() =>
      dispatchSnackbar({
        type: "notice",
        message: i18n("words.copy_link_text"),
      })
    );
  };

  const handleToggleStatusForm = () => {
    patchForm({
      id: modal.id as number,
    });
  };

  useEffect(() => {
    if (!formsData) return;

    setForms(formsData.filter((form) => handleFilter(form)));
  }, [formsData]);

  return {
    forms,
    handleCopy,
    handleToggleStatusForm,
  };
}
