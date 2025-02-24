import { TableDataShape } from "../contexts/Table/types";
import { PaginationShape } from "../utilities/Pagination/type";
import { SortShape } from "../utilities/Sort/type";

type Props = {
  data: Array<Record<string, unknown>>;
};

export function useTableRules({ data }: Props) {
  const getTRows = (
    data: Array<Record<string, unknown>>,
    excludes: Array<string> = []
  ): Array<Array<unknown>> => {
    const matrizValue = [] as Array<unknown[]>;

    data.forEach((item: Record<string, unknown>) => {
      for (const key of excludes) {
        delete item[key];
      }
      matrizValue.push(Object.values(item));
    });

    return matrizValue;
  };

  const paginateData = (
    data: Array<unknown[]>,
    pagination: PaginationShape
  ): Array<unknown[]> => {
    const showMaxElement = pagination.max ?? 5;
    const lastElementPage = pagination.current * showMaxElement;
    const firstElementPage = lastElementPage - showMaxElement;

    return data.slice(firstElementPage, lastElementPage);
  };

  const handleSortTData = (sort: SortShape): TableDataShape => {
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
    paginateData,
    getTRows,
    handleSortTData
  };
}
