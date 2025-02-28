import AccordionProvider from "./AccordionContext";
import { AccordionProps } from "./type";

export function Accordion({ children }: AccordionProps) {
  return (
    <AccordionProvider>
      <div>
        <ul>{children}</ul>
      </div>
    </AccordionProvider>
  );
}
