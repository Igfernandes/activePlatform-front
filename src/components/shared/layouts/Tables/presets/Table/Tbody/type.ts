import { TDataOptions } from "./TData/type";

export type TBodyProps = {
  onManagerColumn: (
    el: HTMLTableCellElement,
    { value, index }: TDataOptions
  ) => void;
};
