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

  const id = String(date.getTime());
  const fieldData: FieldShape = {
    id: String(id),
    label: field.field,
    element: field.field,
    name: `input_${id}`,
    placeholder: "",
    group: data.group,
    width: "100%",
    style: {
      fontSize: "16px",
    },
  };
  callback(fieldData);

  return fieldData;
}
