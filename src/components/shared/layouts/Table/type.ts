export type TableProps<TableData> = {
  title: string;
  data: TableData;
  tHeads?: THeadProps;
  excludes?: Array<string>;
  sort?: SortShape;
  hasTFoot?: boolean;
  options: {
    sort?: SortShape;
    pagination?: PaginationOptionShape;
  };
};

export type PaginationOptionShape = {
  max?: number;
};

export type HookTableDataProps<TableData> = {
  data: TableData;
  excludes: Array<string>;
  tHeads: THeadRequiredProps;
  sort: SortShape;
};

export type SortShape = {
  type: Sort;
  reference: string;
};

export type THeadProps = {
  data?: Array<string>;
  widths?: Array<number>;
};

export type THeadRequiredProps = {
  data: Array<string>;
  widths: Array<number>;
};

export type Sort = "ASC" | "DESC";

export type HookTableProps<TableData> = {
  sort: SortShape;
  data: TableData;
  pagination: PaginationOptionShape;
};

export type PaginationShape = {
  current: number;
  amount?: number;
  max: number;
};
