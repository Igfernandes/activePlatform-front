import FieldsProvider from "./context";
import { FieldsTabs } from "./FieldsTabs";
import { Form } from "./Form";
import { OptionsBar } from "./OptionsBar";
import { FormBuildProps } from "./type";

export function FormHub({
  handleCreated,
  handleShared,
  fields,
  entity,
}: FormBuildProps) {
  return (
    <FieldsProvider entity={entity} fieldsRelation={fields}>
      <OptionsBar handleCreated={handleCreated} handleShared={handleShared} />
      <FieldsTabs />
      <Form />
    </FieldsProvider>
  );
}
