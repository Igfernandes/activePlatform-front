import React, { createContext, useContext, useMemo } from "react";
import { AccordionContextData, AccordionData } from "./types";
import { useAccordion } from "../hooks/useAccordion";

export const AccordionContext = createContext({} as AccordionContextData);

const AccordionProvider = ({ children }: AccordionData) => {
  const { accordionActive, handleCollapse } = useAccordion();

  // Memoização das propriedades do contexto
  const contextValue = useMemo(
    () => ({
      accordionActive,
      handleCollapse,
    }),
    [accordionActive]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;

// Hook para acessar o contexto
export const useAccordionContext = () => useContext(AccordionContext);
