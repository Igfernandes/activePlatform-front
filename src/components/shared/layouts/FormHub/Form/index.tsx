import { FormBuilder } from "@components/shared/forms/FormBuilder";
import { useForm } from "./hooks/useForm";
import { When } from "@components/utilities/When";

export function Form() {
  const {
    fieldByGroup,
    targetTab,
    fieldsGroupEditing,
    handleToggleFieldsGroupToEditing,
    fieldsGroup,
    handleToggleModal,
    isShowModal,
  } = useForm();

  return (
    <>
      {/** Formulário Básico */}
      {fieldByGroup.map(([groupName, fields], key) => (
        <When value={targetTab == "ALL" || targetTab == groupName} key={key}>
          <FormBuilder
            title={groupName}
            fields={fields}
            isEditing={fieldsGroupEditing == groupName}
            handleEdit={handleToggleFieldsGroupToEditing}
            fieldGroups={fieldsGroup}
            onModal={handleToggleModal}
            isShowModal={isShowModal}
          />
        </When>
      ))}
    </>
  );
}
