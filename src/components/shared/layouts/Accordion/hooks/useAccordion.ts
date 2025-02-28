import { useState } from "react";

export function useAccordion() {
  const [accordionActive, setAccordionActive] = useState<number>(-1);

  const handleCollapse = (accordionId: number) => {
    setAccordionActive(accordionId != accordionActive ? accordionId : -1);
  };

  return {
    handleCollapse,
    accordionActive,
  };
}
