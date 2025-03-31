import { useState } from "react";

export function useAccordion() {
  const [accordionActive, setAccordionActive] = useState<string>("");

  const handleCollapse = (accordionId: string) => {
    setAccordionActive(accordionId != accordionActive ? accordionId : "");
  };

  return {
    handleCollapse,
    accordionActive,
  };
}
