import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

type Props = {
  form: FieldShape[];
};

export function Visualization({ form }: Props) {
  return (
    <div>
      <FormBuilderPreview fields={form} />
    </div>
  );
}
