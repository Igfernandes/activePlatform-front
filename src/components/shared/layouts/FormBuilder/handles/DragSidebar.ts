import { DragEndEvent } from "@dnd-kit/core";
import { FieldShape, OptionData } from "../type";

export function handleDragEndSidebar(
  ev: DragEndEvent,
  callback: (newField: FieldShape) => void
): FieldShape | undefined {
  const data = ev.active.data.current;

  if (!data || !data.field) return;
  const field = data.field as OptionData;
  const date = new Date();

  const fieldData: FieldShape = {
    id: String(date.getTime()),
    label: field.field,
    element: field.field,
    placeholder: "",
    group: data.group,
    width: "100%",
    style: {
      fontSize: "16px",
    },
    labelSize: "16px",
  };
  callback(fieldData);

  return fieldData;
}
