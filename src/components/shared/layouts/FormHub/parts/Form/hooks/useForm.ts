import { useState } from "react";
import { useFieldsByGroup } from "@hooks/useFields/useFieldsByGroup";
import { useFieldContext } from "../../../context";

export function useForm() {
  const { fields, targetTab, fieldsGroups, handleToggleModal, isShowModal } =
    useFieldContext();
  const { fieldByGroup } = useFieldsByGroup({
    fieldGroups: fieldsGroups,
    fields: fields,
  });
  const [fieldsGroupEditing, setFieldsGroupEditing] = useState<string>();

  const handleToggleFieldsGroupToEditing = (fieldGroupName: string) => {
    setFieldsGroupEditing(fieldGroupName);
  };

  return {
    fieldByGroup,
    targetTab,
    handleToggleFieldsGroupToEditing,
    fieldsGroupEditing,
    fieldsGroups,
    handleToggleModal,
    isShowModal,
  };
}
