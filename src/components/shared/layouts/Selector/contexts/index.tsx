import React, { createContext, useContext, useMemo } from "react";
import { SelectorContextData, SelectorProps } from "./types";

export const SelectorContext = createContext({} as SelectorContextData);

export default function SelectorProvider({
  children,
  selectors,
  setSelectors,
}: SelectorProps) {

  // Marca ou desmarca TODOS
  const handleCheckedAll = () => {
    const allChecked = !selectors.every((s) => s.isChecked);

    setSelectors(prev =>
      prev.map(s => ({ ...s, isChecked: allChecked }))
    );
  };

  const handleChangeSelector = (value: string) => {
    if (value === "all") return handleCheckedAll();

    const updated = selectors.map(s => {
      if (s.value !== value) return s;
      return { ...s, isChecked: !s.isChecked };
    });

    const totalChecked = updated.filter(s => s.isChecked).length;
    const allChecked = totalChecked === updated.length;

    // Caso todos estejam marcados → marca "all"
    if (allChecked) {
      setSelectors(updated.map(s => ({ ...s, isChecked: true })));
      return;
    }

    // Nenhum marcado → desmarca tudo
    if (totalChecked === 0) {
      setSelectors(updated.map(s => ({ ...s, isChecked: false })));
      return;
    }

    setSelectors(updated);
  };

  const contextValue = useMemo(
    () => ({
      selectors,
      setSelectors,
      handleCheckedAll,
      handleChangeSelector,
    }),
    [selectors]
  );

  return (
    <SelectorContext.Provider value={contextValue}>
      {children}
    </SelectorContext.Provider>
  );
}

export const useSelectorContext = () => useContext(SelectorContext);
