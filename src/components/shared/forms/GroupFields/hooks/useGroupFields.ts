import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { EventDragProps, GroupFieldsDataShape, ItemShape } from "../type";
import { UniqueIdentifier } from "@dnd-kit/core";

type Props = {
  data: Array<GroupFieldsDataShape>;
};

export function useGroupFields({ data }: Props) {
  const [items, setItems] = useState<ItemShape[]>([]);
  const [targetItem, setTargetItem] = useState<UniqueIdentifier>();

  const handleDragEnd = (event: EventDragProps) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleAddingItem = () => {
    const itemId = `item_${items.length + 1}`;
    const newItem = { id: itemId, value: "" };
    setItems([...items, newItem]);
    setTargetItem(itemId);
  };

  console.log(items);
  const handleChangeItem = (
    id: UniqueIdentifier,
    action: "EDIT" | "DELETE"
  ) => {
    if (action === "DELETE") {
      const updatedItems = items.filter((item) => item.id != id);
      return setItems(updatedItems);
    }

    setTargetItem(id !== targetItem ? id : undefined);
  };

  useEffect(() => {
    setItems(
      data.map(({ value, position }) => ({
        id: `item_${position}`,
        value,
      }))
    );
  }, []);

  return {
    handleDragEnd,
    items,
    targetItem,
    handleChangeItem,
    handleAddingItem,
  };
}
