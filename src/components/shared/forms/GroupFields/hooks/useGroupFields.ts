import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { EventDragProps, GroupFieldsDataShape, ItemShape } from "../type";
import { UniqueIdentifier } from "@dnd-kit/core";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

type Props<Payload> = {
  data: Array<GroupFieldsDataShape>;
  name: Path<Payload>;
};

export function useGroupFields<Payload extends FieldValues>({
  data,
  name,
}: Props<Payload>) {
  const [items, setItems] = useState<ItemShape[]>([]);
  const [targetItem, setTargetItem] = useState<UniqueIdentifier>(-1);
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext<Payload>();

  const handleDragEnd = (event: EventDragProps) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const updatedItemsValue = handleUpdateItemsValue(items);
      const oldIndex = updatedItemsValue.findIndex(
        (item) => item.id === active.id
      );
      const newIndex = updatedItemsValue.findIndex(
        (item) => item.id === over?.id
      );
      const updatedItems = arrayMove(updatedItemsValue, oldIndex, newIndex);
      setItems(updatedItems);
      handleUpdateValues(updatedItems);
    }
  };

  const handleUpdateItemsValue = (items: ItemShape[]) => {
    const itemsValue = getValues(name) as ItemShape[];
    return items.map((item, key) => ({
      ...item,
      value: itemsValue[key]?.value ?? "",
    }));
  };

  const handleUpdateValues = (items: ItemShape[]) => {
    setValue(name as Path<Payload>, items as PathValue<Payload, Path<Payload>>);
  };

  const handleUpdateItems = () => {
    const itemsValue = getValues(name);

    setItems((items) => {
      return items.map((item, key) => ({
        ...item,
        value: itemsValue[key]?.value ?? "",
      })) as PathValue<Payload, Path<Payload>>;
    });
  };

  const handleAddingItem = () => {
    const itemId = items.length;
    const newItem = { id: itemId, value: "" };
    const itemsUpdated = [...items, newItem];
    handleUpdateValues(itemsUpdated);
    setItems(itemsUpdated);
    setTargetItem(itemId);
  };

  const handleChangeItem = (
    id: UniqueIdentifier,
    action: "EDIT" | "DELETE"
  ) => {
    if (action === "DELETE") {
      const itemsFiltered = items.filter((item) => item.id != id);

      handleUpdateValues(itemsFiltered);
      return setItems(itemsFiltered);
    }

    handleUpdateItems();
    setTargetItem(id !== targetItem ? id : -1);
  };

  const handleErrors = () => {
    const fieldsErrors = errors[name] as unknown;
    const arrayFieldsErros = fieldsErrors as [];

    if (!arrayFieldsErros || arrayFieldsErros.length === 0) return "";

    const currentError = arrayFieldsErros.find((field) => !!field);
    if (!currentError) return "";

    /** @ts-expect-error só ignora pf  */
    return currentError.message as string;
  };

  useEffect(() => {
    const itemsOrganized = data.sort((a, b) => a.position - b.position);
    const initialItems = itemsOrganized.map(({ id, value }) => ({
      id,
      value,
    }));

    setItems(initialItems);
    setValue(name, initialItems as PathValue<Payload, Path<Payload>>);
  }, []);

  console.log("values", getValues(name));
  return {
    handleDragEnd,
    items,
    targetItem,
    handleChangeItem,
    handleAddingItem,
    handleErrors,
    errors,
    register,
  };
}
