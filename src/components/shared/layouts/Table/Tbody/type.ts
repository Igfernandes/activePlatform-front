import { TDataOptions } from "./TData/type";
import { PaginationShape, SortShape } from "../type";

export type TBodyProps = {
  data: Array<Record<string, unknown>>;
  sort: SortShape;
  onManagerColumn: (
    el: HTMLTableCellElement,
    { value, index }: TDataOptions
  ) => void;
  excludes: Array<string>;
  pagination: PaginationShape;
};
