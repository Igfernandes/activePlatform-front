import { useEffect, useState } from "react";
import { HookTableProps, PaginationShape, Sort } from "../type";
import { getOnlyNumberRange } from "@helpers/numbers";

export function useTable<TableData extends Array<Record<string, unknown>>>({
  sort: sortProps,
  pagination: paginationProps,
  data,
}: HookTableProps<TableData>) {
  const [sort, setSort] = useState<Sort>(sortProps.type);
  const [pagination, setPagination] = useState<PaginationShape>({
    max: paginationProps.max ?? 5,
    current: 1,
  });

  const handleChangeSort = () => {
    setSort(sort == "ASC" ? "DESC" : "ASC");
  };

  const handleChangePagination = (pageNumber: number) => {
    setPagination({
      ...pagination,
      amount: pagination.amount,
      current: getOnlyNumberRange(pageNumber, 1, pagination.amount ?? 1),
    });
  };

  useEffect(() => {
    setPagination({
      ...pagination,
      amount: Math.ceil(data.length / (paginationProps.max ?? 5)),
    });
  }, [data, paginationProps.max]);

  return {
    handleChangeSort,
    sort,
    pagination,
    handleChangePagination,
  };
}
