import { useAccordionContext } from "../AccordionContext";
import { AccordionItemData } from "../type";

type Props = AccordionItemData & {
  children: React.ReactNode;
};

export function AccordionItemContent({ children, accordionId }: Props) {
  const { accordionActive } = useAccordionContext();

  return (
    <div
      className="accordion-content overflow-y-hidden break-words "
      style={{
        maxHeight: accordionActive == accordionId ? "100vh" : "0",
        transition: accordionActive == accordionId ? "all .5s ease-in-out" : "none"
      }}
    >
      {children}
    </div>
  );
}
