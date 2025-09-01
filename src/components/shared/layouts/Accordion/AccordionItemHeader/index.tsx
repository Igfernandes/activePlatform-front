import { ArrowDownSimple } from "@assets/Icons/black/ArrowDownSimple";
import { TabHeaderProps } from "../type";
import { useAccordionContext } from "../AccordionContext";
import { useRef } from "react";

export function AccordionItemHeader({
  title,
  buttons,
  accordionId,
}: TabHeaderProps) {
  const { accordionActive, handleCollapse } = useAccordionContext();
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="accordion-header flex justify-between border-b-[1px] py-4 pr-6 border-secondary relative">
      <div
        className="absolute top-0 left-0 w-full h-full z-[0] cursor-pointer"
        onClick={() => handleCollapse(accordionId)}
      ></div>
      <div ref={divRef}>
        <span>{String(title)}</span>
      </div>
      <div className="flex items-center">
        {buttons}
        <ArrowDownSimple
          onClick={() => handleCollapse(accordionId)}
          className="ml-2 transition-all duration-300 cursor-pointer"
          style={{
            transform:
              accordionActive == accordionId
                ? "rotateZ(180deg)"
                : "rotateZ(0deg)",
          }}
        />
      </div>
    </div>
  );
}
