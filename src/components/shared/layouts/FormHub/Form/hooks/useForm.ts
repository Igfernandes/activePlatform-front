import { useState } from "react";
import { useFieldsByGroup } from "@hooks/useFields/useFieldsByGroup";
import { useFieldContext } from "../../context";

export function useForm() {
  const { fields, targetTab, fieldsGroup, handleToggleModal, isShowModal } =
    useFieldContext();
  const { fieldByGroup } = useFieldsByGroup({
    fieldGroups: fieldsGroup,
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
    fieldsGroup,
    handleToggleModal,
    isShowModal,
  };
}
