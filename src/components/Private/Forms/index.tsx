import { When } from "@components/utilities/When";
import { Customizations } from "./Customizations";
import { Definitions } from "./Definitions";
import { Visualization } from "./Visualization";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

type Props = {
  step: number;
  form: FieldShape[];
  onChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};

export function Forms({ step, form, onChangeFormFields }: Props) {
  return (
    <div className="mt-6 p-6 bg-white">
      <When value={step === 1}>
        <Definitions />
      </When>
      <When value={step === 2}>
        <Customizations
          form={form}
          handleChangeFormFields={onChangeFormFields}
        />
      </When>
      <When value={step === 3}>
        <Visualization form={form} />
      </When>
    </div>
  );
}
