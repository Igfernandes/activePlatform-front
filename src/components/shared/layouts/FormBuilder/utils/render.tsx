import { fields } from "../data/fields";
import { FieldShape } from "../type";

export function getRenderer(type: string) {
  /** @ts-expect-error Por enquanto vai haver necessidade disso. */
  const component = fields[type as string];

  if (component)
    return (props: Omit<FieldShape, "element">) => component(props);

  return InvalidComponent;
}

type InvalidComponentProps = {
  type: string;
};

function InvalidComponent({ type }: InvalidComponentProps) {
  return <div>No renderer found for {type}</div>;
}
