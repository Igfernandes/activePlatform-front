import { FormBuilder } from "@components/shared/layouts/FormBuilder";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

type Props = {
  form: FieldShape[];
  handleChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};

export function Customizations({ form, handleChangeFormFields }: Props) {
  return (
    <div>
      <FormBuilder form={form} onChangeForm={handleChangeFormFields} />
    </div>
  );
}
