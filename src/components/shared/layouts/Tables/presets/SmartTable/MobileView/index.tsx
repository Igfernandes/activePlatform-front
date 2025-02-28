import { ReactNode } from "react";
import { Accordion } from "../../../../Accordion";
import { AccordionItemHeader } from "../../../../Accordion/AccordionItemHeader";
import { AccordionItem } from "../../../../Accordion/AccordionItem";
import { useTableContext } from "../../../contexts/Table";
import { AccordionItemContent } from "../../../../Accordion/AccordionItemContent";

type Props = {
  tHeaders: Array<string>;
};

export function MobileView({ tHeaders }: Props) {
  const { paginatedTRows } = useTableContext();

  return (
    <Accordion>
      {paginatedTRows.map((row) => {
        const [id, ...data] = row;
        const actions = data.pop(); // Último item como ações

        return (
          <AccordionItem key={`accordion_item_${id}`}>
            <AccordionItemHeader
              accordionId={id as number}
              title={id as ReactNode}
              buttons={actions as ReactNode}
            />
            <AccordionItemContent accordionId={id as number}>
              <ul className="p-2">
                {data.map((cell, cellIndex) => (
                  <li key={`accordion_item__${id}_${cellIndex}`}>
                    <strong>{`${tHeaders[cellIndex]}:`}</strong>
                    <span className="ml-2">{cell as ReactNode}</span>
                  </li>
                ))}
              </ul>
            </AccordionItemContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
