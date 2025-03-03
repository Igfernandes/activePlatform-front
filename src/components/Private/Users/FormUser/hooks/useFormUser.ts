import { useState } from "react";
import { useUserContext } from "../../context";
import { useFieldsByGroup } from "@hooks/useFields/useFieldsByGroup";

export function useFormUser() {
  const {
    userFields,
    targetTab,
    userFieldsGroup,
    handleToggleModal,
    isShowModal,
  } = useUserContext();
  const { fieldByGroup } = useFieldsByGroup({
    fieldGroups: userFieldsGroup,
    fields: userFields,
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
    userFieldsGroup,
    handleToggleModal,
    isShowModal,
  };
}
