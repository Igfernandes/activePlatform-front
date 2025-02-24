import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { FieldValues, useFormContext } from "react-hook-form";
import { GroupFieldsProps } from "./type";
import { SortableItem } from "./SortableItem";
import { useGroupFields } from "./hooks/useGroupFields";
import i18n from "@configs/i18n";

export function GroupFields<Payload extends FieldValues>({
  name,
  data = [],
}: GroupFieldsProps<Payload>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<Payload>();
  const {
    handleDragEnd,
    items,
    handleChangeItem,
    targetItem,
    handleAddingItem,
  } = useGroupFields({ data });

  return (
    <div>
      <div className="btn-add mb-4">
        <span className="text-red cursor-pointer" onClick={handleAddingItem}>
          <strong>{i18n(`words.add`)}</strong>
        </span>
      </div>
      <div className="overflow-y-auto max-h-[40vh] hidden-scroll">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items.map((item) => item.id)}>
            <ul>
              {items.map((item) => (
                <SortableItem<Payload>
                  key={item.id}
                  id={item.id}
                  value={item.value as string}
                  name={`${name}.${item.id}`}
                  errors={errors}
                  target={targetItem}
                  register={register}
                  onChange={handleChangeItem}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
