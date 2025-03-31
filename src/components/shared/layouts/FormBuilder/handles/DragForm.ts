import { DragEndEvent } from "@dnd-kit/core";
import { FieldShape } from "../type";
import { arrayMove } from "@dnd-kit/sortable";

export function handleDragEndForm(
  ev: DragEndEvent,
  callback: (fields: Array<FieldShape>) => void,
  fields: Array<FieldShape>
) {
  const { active, over } = ev;

  if (active.id === over?.id) return;
  const oldIndex = fields.findIndex((item, index) => index === active.id);
  const newIndex = fields.findIndex((item, index) => index === over?.id);

  const updatedItems = arrayMove(fields, oldIndex, newIndex);
  callback(updatedItems);
}
