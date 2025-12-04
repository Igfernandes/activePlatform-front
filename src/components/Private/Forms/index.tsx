import { When } from "@components/utilities/When";
import { Customizations } from "./Customizations";
import { Definitions } from "./Definitions";
import { Visualization } from "./Visualization";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import { FilledFormsTable } from "./Update/FilledFormsTable";
import { FormsShape } from "@type/Forms";

type Props = {
  step: number;
  components: FieldShape[];
  slug?: string;
  form?: FormsShape;
  onChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};

export function Forms({
  step,
  form,
  components,
  slug,
  onChangeFormFields,
}: Props) {
  return (
    <div className="mt-6 p-6 bg-white">
      <When value={step === 1}>
        <Definitions slug={slug} formId={form?.id ?? 0} handleChangeFormFields={onChangeFormFields} />
        <div className="mt-4">
          <FilledFormsTable components={components} formId={form?.id ?? 0} />
        </div>
      </When>
      <When value={step === 2}>
        <Customizations
          components={components}
          handleChangeFormFields={onChangeFormFields}
        />
      </When>
      <When value={step === 3}>
        <Visualization form={components} />
      </When>
    </div>
  );
}
