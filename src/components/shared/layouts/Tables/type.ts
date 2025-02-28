import { TableActions } from "./utilities/Options/type";
import { PaginationOptionShape } from "./utilities/Pagination/type";
import { SortShape } from "./utilities/Sort/type";

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
    actions?: Array<TableActions>;
    buttons?: React.ReactNode;
    filters?: {
      tag: {
        key: string;
      };
    };
  };
};

export type HookTableDataProps<TableData> = {
  data: TableData;
  excludes: Array<string>;
  tHeads: THeadRequiredProps;
};

export type THeadProps = {
  data?: Array<string>;
  widths?: Array<number>;
};

export type THeadRequiredProps = {
  data: Array<string>;
  widths: Array<number>;
};

export type HookTableProps<TableData> = {
  sort: SortShape;
  data: TableData;
  pagination: PaginationOptionShape;
};
