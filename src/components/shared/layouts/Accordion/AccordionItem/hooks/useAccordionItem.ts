import { Children, isValidElement } from "react";
import { AccordionItemHeader } from "../../AccordionItemHeader";

export function useAccordionItem() {
  const hasChildrenRequired = (children: React.ReactNode) => {
    // Pegando o primeiro filho do children
    const firstChild = Children.toArray(children)[0];

    // Verificando se é um elemento válido e se é do tipo TabHeader
    if (
      !isValidElement(firstChild) ||
      firstChild.type !== AccordionItemHeader
    ) {
      throw new Error(
        "O primeiro elemento do AccordionItem deve ser um AccordionItemHeader"
      );
    }
  };

  return {
    hasChildrenRequired,
  };
}
