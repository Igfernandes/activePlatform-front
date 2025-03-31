import { DragOverlay, useDroppable } from "@dnd-kit/core";
import { useFormBuilderContext } from "../../context";
import { SortableField } from "./SortableField";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { When } from "@components/utilities/When";

export function FormBuilderContent() {
  const { setNodeRef, isOver, active } = useDroppable({
    id: "canvas_droppable",
    data: {
      parent: null,
      isContainer: true,
    },
  });
  const { fields } = useFormBuilderContext();

  return (
    <SortableContext
      items={fields.map((field, key) => key)}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className="canvas w-[70%] ml-2"
        style={{
          border: "2px dashed #ccc",
          display: "flex",
          backgroundColor: isOver ? "lightcyan" : "transparent", // Muda a cor do fundo quando o item está sobre
        }}
      >
        <div className="canvas-fields w-full p-2">
          {fields?.map((field, i) => (
            <SortableField key={`${field.id}_${i}`} {...field} index={i} />
          ))}
        </div>
        <When value={!!active}>
          <DragOverlay>
            <div
              className=" w-full"
              style={{
                cursor: "pointer",
                opacity: 0, // Mantém a opacidade do item enquanto arrasta
              }}
            >
              {fields
                .filter((field) => field.id == active?.data.current?.id)
                .map((field) => (
                  <SortableField
                    key={`${field?.id}_active`}
                    {...field}
                    index={"active"}
                  />
                ))}
            </div>
          </DragOverlay>
        </When>
      </div>
    </SortableContext>
  );
}
