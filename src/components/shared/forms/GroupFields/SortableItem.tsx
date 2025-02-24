import { GripVertical } from "@assets/Icons/black/GripVertical";
import { Input } from "./Input";
import { FieldError, FieldValues, Path } from "react-hook-form";
import { bgDefaultColor } from "@assets/colors/default";
import { CSS } from "@dnd-kit/utilities";
import { ItemProps } from "./type";
import { useSortable } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { Close } from "@assets/Icons/black/CloseClean";
import { Config } from "@assets/Icons/black/Config";

export function SortableItem<Payload extends FieldValues>({
  id,
  value,
  name,
  register,
  errors,
  onChange,
  target,
}: ItemProps<Payload>) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const [isTargetElement, setIsTargetElement] = useState<boolean>(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    background: bgDefaultColor.secondary,
  };

  useEffect(() => {
    setIsTargetElement(target === id);
  }, [target, id, isTargetElement]);

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="form-btn my-2 flex items-center rounded-lg"
    >
      <div className="ml-2 cursor-grab" {...attributes} {...listeners}>
        <GripVertical />
      </div>
      <div className="flex-1">
        <Input
          {...register(`${name}.${id}` as Path<Payload>)}
          dataTestId={`group_fields_${name}`}
          defaultValue={value}
          disabled={!isTargetElement}
          errors={errors[`${name}.${id}`] as FieldError}
          className={
            isTargetElement ? "" : "disabled:bg-secondary disabled:border-none"
          }
        />
      </div>
      <div className="mx-2 flex">
        <Config
          className="w-5 cursor-pointer"
          onClick={() => onChange(id, "EDIT")}
        />
        <Close
          className="w-5 cursor-pointer"
          onClick={() => onChange(id, "DELETE")}
        />
      </div>
    </li>
  );
}
