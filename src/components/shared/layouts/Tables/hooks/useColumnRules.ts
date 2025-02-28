import { useState } from "react";

type Props = {
  tHeadsWidth: Array<number>;
};

export function useColumnRules({ tHeadsWidth = [] }: Props) {
  const [amountHiddenCols, setAmountHiddenCols] = useState<Array<boolean>>([]);

  /**
   * Adjusts column visibility in a table based on its width.
   *
   * @param {HTMLTableElement} [table] - The table element whose columns need to be truncated.
   * If not provided, the function returns early.
   *
   * The function calculates the total width of the table headers and determines which
   * columns should be hidden based on the available table width.
   */
  const handleTruncateColumn = (table?: HTMLTableElement) => {
    if (!table) return;

    const tableWidth = table?.clientWidth ?? 0;

    let widthColumns = tHeadsWidth.reduce(
      (prevWidth, currentWidth) => prevWidth + currentWidth,
      0
    );
    const arr: Array<boolean> = [];

    tHeadsWidth.forEach((tHeadWidth, index) => {
      widthColumns = widthColumns - tHeadWidth + 50;
      if (widthColumns >= tableWidth) {
        arr[tHeadsWidth.length - index] = true;
      } else {
        arr[tHeadsWidth.length - index] = false;
      }
    });

    setAmountHiddenCols(arr.filter((col) => typeof col === "boolean"));
  };

  return {
    handleTruncateColumn,
    amountHiddenCols,
  };
}
