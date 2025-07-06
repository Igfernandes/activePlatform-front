import { FieldShape } from "../type";
import { Field } from "./Field";

type Props = {
  fields: Array<FieldShape>;
  handleValue?: (name: string, value: unknown) => void;
};

export function FormBuilderPreview({ fields = [], handleValue }: Props) {
  return (
    <div className="canvas w-full">
      <div className="canvas-fields flex flex-wrap w-full p-2">
        {fields?.map((field, i) => (
          <Field key={i} {...field} setValue={handleValue} />
        ))}
      </div>
    </div>
  );
}
