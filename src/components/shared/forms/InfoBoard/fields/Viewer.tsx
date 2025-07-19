import { When } from "@components/utilities/When";

import { components } from "./components";
import { BoardViewerProps } from "../type";
import { TSpan } from "./Span";

export function TViewer({
  label,
  element,
  defaultValue,
  ...props
}: BoardViewerProps) {
  if (!element || !components[element])
    return <TSpan text={label ?? ""} value={defaultValue ?? ""} />;
  const Component = components[element];

  return (
    <>
      <When value={!!Component}>
        <Component
          {...props}
          label={label}
          defaultValue={defaultValue ?? ""}
          element={element}
        />
      </When>
      <When value={!Component}>
        <TSpan text={label ?? ""} value={defaultValue} />
      </When>
    </>
  );
}
