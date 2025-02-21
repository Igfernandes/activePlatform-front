import { PaginationShape, SortShape } from "../../type";

type Props = {
  sort: SortShape;
  excludes: Array<string>;
  pagination: PaginationShape;
};

export function useTBody({ sort, excludes, pagination }: Props) {
  const handleSortTData = (data: Array<Record<string, unknown>>) => {
    data.sort((a, b) => {
      const valueA = String(a[sort.reference]);
      const valueB = String(b[sort.reference]);

      return sort.type === "ASC"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    return data;
  };

  const getTRows = (
    data: Array<Record<string, unknown>>
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

  const paginateData = (data: Array<unknown[]>): Array<unknown[]> => {
    const showMaxElement = pagination.max ?? 5;
    const lastElementPage = pagination.current * showMaxElement;
    const firstElementPage = lastElementPage - showMaxElement;

    return data.slice(firstElementPage, lastElementPage);
  };

  return {
    handleSortTData,
    getTRows,
    paginateData,
  };
}
