import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { FieldValues } from "react-hook-form";
import { GroupFieldsProps } from "./type";
import { SortableItem } from "./SortableItem";
import { useGroupFields } from "./hooks/useGroupFields";
import i18n from "@configs/i18n";

export function GroupFields<Payload extends FieldValues>({
  name,
  data = [],
}: GroupFieldsProps<Payload>) {
  const {
    handleDragEnd,
    items,
    handleChangeItem,
    targetItem,
    handleAddingItem,
    handleErrors,
    errors,
    register,
  } = useGroupFields<Payload>({ data, name });

  console.log(items)
  return (
    <div>
      <div className="btn-add mb-4">
        <span className="text-red cursor-pointer" onClick={handleAddingItem}>
          <strong>{i18n(`Words.add`)}</strong>
        </span>
      </div>
      <div className="overflow-y-auto max-h-[160px] md:max-h-[40vh] hidden-scroll">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items.map((item) => item.id)}>
            <ul>
              {items.map((item, key) => (
                <SortableItem<Payload>
                  key={`${item.id}_${item.value}`}
                  id={item.id}
                  position={key}
                  value={item.value as string}
                  name={name}
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
      <div>
        <span className="text-xs text-warning">{handleErrors()}</span>
      </div>
    </div>
  );
}
