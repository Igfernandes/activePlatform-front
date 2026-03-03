import { useFormContext } from "react-hook-form";
import { FieldShape } from "../type";
import { getRenderer } from "../utils/render";

export function Field({ element, group, ...rest }: FieldShape) {
  const Component = getRenderer(element);
  const { register } = useFormContext()
  const name = `input_${rest.id}`

  return (
    <Component
      {...rest}
      {...(group !== "layout" ? register(name) : {})}
      type={element}
    />
  );
}
