import { FormBuilder } from "@components/shared/layouts/FormBuilder";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

type Props = {
  components: FieldShape[];
  handleChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};

export function Customizations({ components, handleChangeFormFields }: Props) {
  return (
    <div>
      <FormBuilder
        components={components}
        onChangeForm={handleChangeFormFields}
      />
    </div>
  );
}
