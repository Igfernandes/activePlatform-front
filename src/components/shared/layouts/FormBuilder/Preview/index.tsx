import { FieldShape } from "../type";
import { Field } from "./Field";

type Props = {
  fields: Array<FieldShape>;
};

export function FormBuilderPreview({ fields = [] }: Props) {
  return (
    <div className="canvas w-full ml-2 flex">
      <div className="canvas-fields w-full p-2">
        {fields?.map((field, i) => (
          <Field key={i} {...field} />
        ))}
      </div>
    </div>
  );
}
