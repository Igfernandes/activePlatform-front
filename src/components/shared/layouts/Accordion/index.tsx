import AccordionProvider from "./AccordionContext";
import { AccordionProps } from "./type";

export function Accordion({ children, className }: AccordionProps) {
  return (
    <AccordionProvider>
      <div>
        <ul className={className}>{children}</ul>
      </div>
    </AccordionProvider>
  );
}
