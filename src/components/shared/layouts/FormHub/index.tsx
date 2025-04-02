import FieldsProvider from "./context";
import { FieldsTabs } from "./parts/FieldsTabs";
import { Form } from "./parts/Form";
import { OptionsBar } from "./parts/OptionsBar";
import { FormBuildProps } from "./type";

export function FormHub({
  fields,
  entity,
  groups,
  handleShared,
  entityType,
}: FormBuildProps) {
  return (
    <FieldsProvider
      entityType={entityType}
      entity={entity}
      fieldsRelation={fields}
      Groups={groups}
    >
      <OptionsBar handleShared={handleShared} />
      <FieldsTabs />
      <Form />
    </FieldsProvider>
  );
}
