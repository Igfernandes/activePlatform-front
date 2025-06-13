import React from "react";
import { GripVertical } from "@assets/Icons/black/GripVertical";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import i18n from "@configs/i18n";

type Props = {
  id: UniqueIdentifier;
  icon: React.ReactNode;
  text: string;
  group: string;
};

export function Item({ icon, text, id, group }: Props) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: {
      field: {
        icon,
        field: text,
        id,
      },
      fromSidebar: true,
      group,
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        opacity: isDragging ? 0.5 : 1, // Em vez de sumir completamente, deixe meio transparente
        transition: "transform 0.2s ease, opacity 0.2s ease",
        position: "relative",
        zIndex: isDragging ? 999 : "auto",
      }}
    >
      <div className="flex items-center p-2 border-2 border-slate-100 hover:bg-slate-300">
        <div className="mr-2">{icon}</div>
        <div>
          <span className="text-xs">{i18n(`Words.${text}`)}</span>
        </div>
        <div className="ml-auto">
          <GripVertical />
        </div>
      </div>
    </div>
  );
}
