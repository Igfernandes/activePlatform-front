import { fields } from "../data/fields";

export function getRenderer(type: string) {
  /** @ts-expect-error Por enquanto vai haver necessidade disso. */
  const Component = fields[type as string];

  if (Component)
    return Component;

  return InvalidComponent;
}

type InvalidComponentProps = {
  type?: string;
};

function InvalidComponent({ type }: InvalidComponentProps) {
  return <div>No renderer found for {type}</div>;
}
