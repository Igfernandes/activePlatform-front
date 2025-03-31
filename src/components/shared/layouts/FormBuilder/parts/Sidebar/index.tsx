import { DragOverlay } from "@dnd-kit/core";
import { Item } from "./Options/Item";
import { useFormBuilderContext } from "../../context";
import { Options } from "./Options";
import { When } from "@components/utilities/When";
import { optionsSimples } from "../../data/options/simples";
import { optionsUser } from "../../data/options/users";
import { optionsLayout } from "../../data/options/layout";
import { useEffect } from "react";

export function FormBuilderSidebar() {
  const { optionDrag, handleCollapse } = useFormBuilderContext();

  useEffect(() => {
    handleCollapse("simple");
  }, []);

  return (
    <div className="bg-white builder-sidebar w-[30%] sticky top-0 h-full z-[10]">
      <div>
        <Options options={optionsSimples} id="simple" title="simple" />
        <Options options={optionsUser} id="user" title="user" />
        <Options options={optionsLayout} id="layout" title="layout" />
      </div>
      <When value={!!optionDrag?.field}>
        <DragOverlay>
          <div
            className="absolute w-full z-[9999999999]"
            style={{
              cursor: "grabbing",
              opacity: 1, // Mantém a opacidade do item enquanto arrasta
            }}
          >
            <Item
              id={optionDrag?.id ?? 0}
              icon={optionDrag?.icon}
              text={optionDrag?.id ?? ""}
              group=""
            />
          </div>
        </DragOverlay>
      </When>
    </div>
  );
}
