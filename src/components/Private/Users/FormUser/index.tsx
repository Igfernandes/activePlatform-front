import { FormBuilder } from "@components/shared/forms/FormBuilder";
import { useFormUser } from "./hooks/useFormUser";
import { When } from "@components/utilities/When";

export function FormUser() {
  const {
    fieldByGroup,
    targetTab,
    fieldsGroupEditing,
    handleToggleFieldsGroupToEditing,
    userFieldsGroup,
    handleToggleModal,
    isShowModal,
  } = useFormUser();

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
            fieldGroups={userFieldsGroup}
            onModal={handleToggleModal}
            isShowModal={isShowModal}
          />
        </When>
      ))}
    </>
  );
}
