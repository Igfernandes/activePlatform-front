import { useEffect, useState } from "react";
import { PaginationOptionShape, PaginationShape } from "../type";
import { getOnlyNumberRange } from "@helpers/numbers";

type Props = {
  paginationInstance?: PaginationOptionShape;
  tRows: Array<unknown[]>;
};

export function usePaginationRules({ paginationInstance, tRows }: Props) {
  const INITIAL_PAGE = 1;
  const MAX_PAGINATION = paginationInstance?.max ?? 5;

  const [pagination, setPagination] = useState<PaginationShape>({
    max: MAX_PAGINATION,
    current: INITIAL_PAGE,
  });

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
      amount: Math.ceil(tRows.length / MAX_PAGINATION),
    });
  }, [tRows, MAX_PAGINATION]);

  return {
    pagination,
    handleChangePagination,
  };
}
