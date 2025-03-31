import { When } from "@components/utilities/When";
import { FieldShape } from "../type";
import { getRenderer } from "../utils/render";

export function Field({
  element,
  group,
  labelSize,
  labelColor,
  ...rest
}: FieldShape) {
  const Component = getRenderer(element);
  const className = "canvas-field";

  return (
    <div className={className}>
      <div className="flex justify-between items-center relative text-lg z-50">
        <div>
          <label
            htmlFor={rest.id}
            style={{
              fontSize: labelSize,
              color: labelColor,
            }}
          >
            {["simple", "user"].includes(group ?? "") &&
            !["radio", "checkbox"].includes(element) ? (
              rest.label
            ) : (
              <span className="opacity-0">none</span>
            )}
          </label>
        </div>
      </div>
      <div className="rounded-md flex">
        <Component
          type={element}
          {...rest}
          defaultValue={
            ["button"].includes(element)
              ? rest.label ?? rest.defaultValue
              : rest.defaultValue
          }
        />
        <When
          value={
            ["simple", "user"].includes(group ?? "") &&
            ["radio", "checkbox"].includes(element)
          }
        >
          <label className="ml-2" htmlFor={rest.id}>
            {rest.label}
          </label>
        </When>
      </div>
    </div>
  );
}
