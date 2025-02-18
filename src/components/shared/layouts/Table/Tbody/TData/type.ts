export type TDataOptions = {
  value: unknown;
  index: number;
};

export type TDataProps<TableData> = {
  data: TableData[];
  onManagerColumn: (
    el: HTMLTableCellElement,
    { value, index }: TDataOptions
  ) => void;
};
