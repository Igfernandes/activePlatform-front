import { FieldShape } from "../type";
import { getRenderer } from "../utils/render";

export function Field({ element, required, ...rest }: FieldShape) {
  const Component = getRenderer(element);

  return (
    <Component
      type={element}
      {...rest}
      required={required}
      name={`input_${rest.id}`}
      defaultValue={
        ["button"].includes(element)
          ? rest.label ?? rest.defaultValue
          : rest.defaultValue
      }
    />
  );
}
