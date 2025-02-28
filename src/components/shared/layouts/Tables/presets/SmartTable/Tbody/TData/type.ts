export type TDataOptions = {
  value: unknown;
  index: number;
};

export type TDataProps<TableData> = {
  data: TableData[];
  keyRow: number;
};
