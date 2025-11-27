import React from "react";
import { useAccordionItem } from "./hooks/useAccordionItem";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function AccordionItem({ children, className }: Props) {
  const { hasChildrenRequired } = useAccordionItem();

  hasChildrenRequired(children);

  return (
    <li className={`accordion-item ${className}`}>{children}</li>
  );
}
