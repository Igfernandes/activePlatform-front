import { useTableContext } from "../../../contexts/Table";

export function useSort() {
  const { handleChangeSort, sort } = useTableContext();

  const handleSortTData = (data: Array<Record<string, unknown>>) => {
    if (!sort) return data;

    data.sort((a, b) => {
      const valueA = String(a[sort.reference]);
      const valueB = String(b[sort.reference]);

      return sort.type === "ASC"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    return data;
  };

  return {
    handleSortTData,
    handleChangeSort,
    sort,
  };
}
