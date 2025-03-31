import { useSortable } from "@dnd-kit/sortable";
import { FieldShape } from "../../type";
import { CSS } from "@dnd-kit/utilities";
import { Field } from "./Field";
import { Settings } from "@assets/Icons/black/Settings";
import { Trash } from "@assets/Icons/black/Trash";
import { useFormBuilderContext } from "../../context";
import { When } from "@components/utilities/When";

export type Props = FieldShape & {
  index: number | string;
};

export function SortableField({ id, index, width, margin, ...rest }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, over } =
    useSortable({
      id: index,
      data: {
        index,
        id,
        fromForm: true,
      },
    });
  const { handleToggleModal, handleRemoveField } = useFormBuilderContext();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%",
  };

  return (
    <div
      className={`relative z-0 inline-block mr-1  ${
        rest.className?.includes("w")
          ? rest.className
          : `${rest.className} w-full`
      }`}
      style={{
        width,
        margin,
      }}
    >
      <When value={!over}>
        <div className="flex items-center absolute right-1 top-3 z-[999]">
          <div className="mx-1 cursor-pointer">
            <Settings
              onClick={() => handleToggleModal(true, id)}
              width={20}
              height={20}
            />
          </div>
          <div className="cursor-pointer">
            <Trash
              width={13}
              height={13}
              fill={"#d50245"}
              onClick={() => handleRemoveField(id)}
            />
          </div>
        </div>
      </When>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="my-1 cursor-pointer z-40"
        style={style}
      >
        <Field {...rest} id={id} />
      </div>
    </div>
  );
}
