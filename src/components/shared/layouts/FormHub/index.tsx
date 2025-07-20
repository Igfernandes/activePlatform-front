import FieldProvider from "./context/Fields";
import FieldsGroupsProvider from "./context/FieldsGroups";
import ModalProvider from "./context/Modal";
import TabsProvider from "./context/Tabs";
import { FieldsTabs } from "./parts/FieldsTabs";
import { Form } from "./parts/Form";
import { OptionsBar } from "./parts/OptionsBar";
import { FormBuildProps } from "./type";

export function FormHub({
  fields,
  entity,
  groups,
  entityType,
  handleSubmitFields,
  handleUpdateClient,
}: FormBuildProps) {
  return (
    <div className="relative z-0">
      <TabsProvider>
        <ModalProvider>
          <FieldsGroupsProvider groups={groups}>
            <FieldProvider
              entity={entity}
              entityType={entityType}
              fieldsRelation={fields}
              handleSubmitFields={handleSubmitFields}
            >
              <OptionsBar
                handleUpdateClient={handleUpdateClient}
              />
              <FieldsTabs />
              <div className="relative z-10">
                <Form />
              </div>
            </FieldProvider>
          </FieldsGroupsProvider>
        </ModalProvider>
      </TabsProvider>
    </div>
  );
}
