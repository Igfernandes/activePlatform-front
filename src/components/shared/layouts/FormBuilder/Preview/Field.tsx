import { useFormContext } from "react-hook-form";
import { FieldShape } from "../type";
import { getRenderer } from "../utils/render";

export function Field({ element, group, ...rest }: FieldShape) {
  const Component = getRenderer(element);
  const { register, formState: { errors } } = useFormContext()
  const name = `input_${rest.id}`

  console.log(errors)
  return (
    <Component
      {...rest}
      {...(group !== "layout" ? register(name) : {})}
      type={element}
    />
  );
}
