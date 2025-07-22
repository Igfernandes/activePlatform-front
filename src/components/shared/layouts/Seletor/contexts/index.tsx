import React, { createContext, useContext, useMemo } from "react";
import { SelectorContextData, SelectorProps } from "./types";
import { SelectorShape } from "../type";

export const SelectorContext = createContext({} as SelectorContextData);

const SelectorProvider = ({
  children,
  selectors,
  setSelectors,
}: SelectorProps) => {
  const handleCheckedAll = () => {
    const foundSelectorAll = selectors.find(
      (selector) => selector.value == "all"
    );

    if (!foundSelectorAll) return;

    const isChecked = !foundSelectorAll.isChecked;

    setSelectors((prevSelectors: Array<SelectorShape>) =>
      prevSelectors.map((selector: SelectorShape) => {
        return {
          isChecked,
          value: selector.value,
        };
      })
    );
  };

  const handleChangeSelector = (value: string) => {
    if (value == "all") return handleCheckedAll();

    const currentSelector = selectors.find(
      (selector) => selector.value == value
    );

    if (!currentSelector) return;

    currentSelector.isChecked = !currentSelector.isChecked;
    const allSelected = selectors.filter((selector) => !!selector.isChecked);
    const hasAllChecked = allSelected.length === selectors.length;

    if (hasAllChecked) return handleCheckedAll();
    
    const isLastedChecked = allSelected.length == 0;

    if (isLastedChecked && currentSelector.isChecked === false) {
      return setSelectors((prevSelectors: Array<SelectorShape>) =>
        prevSelectors.map((selector: SelectorShape) => {
          selector.isChecked = false;

          return selector;
        })
      );
    }

    setSelectors((prevSelectors: Array<SelectorShape>) =>
      prevSelectors.map((selector: SelectorShape) => {
        if (selector.value != value) return selector;

        return currentSelector;
      })
    );
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
};

export default SelectorProvider;

// Hook para acessar o contexto
export const useSelectorContext = () => useContext(SelectorContext);
