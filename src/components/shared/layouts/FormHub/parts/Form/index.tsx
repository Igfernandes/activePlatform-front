import { Builder } from "@components/shared/layouts/FormHub/parts/Builder";
import { useForm } from "./hooks/useForm";
import { When } from "@components/utilities/When";

export function Form() {
  const {
    fieldByGroup,
    targetTab,
    fieldsGroupEditing,
    handleToggleFieldsGroupToEditing,
    fieldsGroups,
    handleToggleModal,
    isShowModal,
  } = useForm();

  return (
    <>
      {/** Formulário Básico */}
      {fieldByGroup.map(([groupName, fields], key) => (
        <When value={targetTab == "ALL" || targetTab == groupName} key={key}>
          <Builder
            title={groupName}
            fields={fields}
            isEditing={fieldsGroupEditing == groupName}
            handleEdit={handleToggleFieldsGroupToEditing}
            fieldGroups={fieldsGroups}
            onModal={handleToggleModal}
            isShowModal={isShowModal}
          />
        </When>
      ))}
    </>
  );
}
