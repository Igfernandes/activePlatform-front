import {
  PaginationOptionShape,
  PaginationShape,
} from "../../utilities/Pagination/type";
import { SortShape } from "../../utilities/Sort/type";

export type TableDataShape = Array<Record<string, unknown>>;

export type TableContextData = {
  sort?: SortShape;
  handleChangeSort: () => void;
  handleChangePagination: (pageNumber: number) => void;
  pagination: PaginationShape;
  tRows: Array<unknown[]>;
  paginatedTRows: Array<unknown[]>;
  filters: Record<string, FilterCallback>;
  handleChangeFilters: (callback: Record<string, FilterCallback>) => void;
  handleChangeEvent: (isEvent: boolean) => void;
};

export type TableProps = {
  sort?: SortShape;
  pagination?: PaginationOptionShape;
  data: TableDataShape;
  tHeads?: Array<string>;
  excludes: Array<string>;
  children: React.ReactNode;
};

export type TableData = TableProps;

export type FilterCallback = (data: TableDataShape) => TableDataShape;
