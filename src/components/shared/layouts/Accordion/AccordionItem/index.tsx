import React from "react";
import { useAccordionItem } from "./hooks/useAccordionItem";

type Props = {
  children: React.ReactNode;
};

export function AccordionItem({ children }: Props) {
  const { hasChildrenRequired } = useAccordionItem();

  hasChildrenRequired(children);

  return <li className="accordion-item">{children}</li>;
}
