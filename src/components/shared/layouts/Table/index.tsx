import { SortAscendingLetters } from "@assets/Icons/black/SortAscendingLetters";
import i18n from "@configs/i18n";
import { useTableData } from "./hooks/useTableData";
import React from "react";
import {
  PaginationOptionShape,
  SortShape,
  TableProps,
  THeadRequiredProps,
} from "./type";
import { useResizeObserver } from "./hooks/useResizeObserver";
import { useTable } from "./hooks/useTable";
import { Pagination } from "./Pagination";
import { THead } from "./Thead";
import { TFoot } from "./TFoot";
import { TBody } from "./Tbody";

export function Table<TableData extends Array<Record<string, unknown>>>({
  title,
  data,
  excludes = [],
  tHeads: currentTHeads,
  hasTFoot,
  options = {
    pagination: {
      max: 3,
    },
    sort: {
      type: "ASC",
      reference: "name",
    },
  },
}: TableProps<TableData>) {
  const { handleChangeSort, sort, handleChangePagination, pagination } =
    useTable({
      sort: options.sort as SortShape,
      data,
      pagination: options.pagination as PaginationOptionShape,
    });
  const { ref } = useResizeObserver();
  const { tHeads, handleManagerColumn } = useTableData({
    data,
    sort: {
      type: sort,
      reference: options.sort?.reference ?? "",
    },
    excludes,
    tHeads: currentTHeads as THeadRequiredProps,
  });

  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-2xl">
            <strong>{title}</strong>
          </h2>
        </div>
        <div className="flex cursor-pointer" onClick={handleChangeSort}>
          <p className="mr-2">{i18n("words.list_from_a_to_z")}</p>
          <SortAscendingLetters
            style={{
              transform: `rotateZ(${sort == "ASC" ? "0deg" : "180deg"})`,
            }}
          />
        </div>
      </div>
      <table className="w-full" ref={ref}>
        <THead tHeads={tHeads} widths={currentTHeads?.widths} />
        <TBody
          onManagerColumn={handleManagerColumn}
          data={data}
          excludes={excludes}
          sort={{
            type: sort,
            reference: options.sort?.reference ?? "",
          }}
          pagination={pagination}
        />
        <TFoot
          hasTFoot={hasTFoot}
          tHeads={tHeads}
          widths={currentTHeads?.widths}
        />
      </table>
      <div className="flex justify-between mt-3">
        <div>
          <p className="text-sm">{`Exibindo ${pagination.max} de ${data.length} resultados`}</p>
        </div>
        <div>
          <Pagination
            onPagination={handleChangePagination}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
}
