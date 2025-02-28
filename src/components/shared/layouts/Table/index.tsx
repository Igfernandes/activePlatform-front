import { useTableData } from "./hooks/useTableData";
import React from "react";
import { TableProps, THeadRequiredProps } from "./type";
import { useResizeObserver } from "./hooks/useResizeObserver";
import { Pagination } from "./utilities/Pagination";
import { THead } from "./Thead";
import { TFoot } from "./TFoot";
import { TBody } from "./Tbody";
import { When } from "@components/utilities/When";
import TableProvider from "./contexts/Table";
import { Sort } from "./utilities/Sort";
import { Options } from "./utilities/Options";
import { Tags } from "./utilities/Filters/Tags";

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
  const { ref } = useResizeObserver();
  const { tHeads, handleManagerColumn } = useTableData({
    data,
    excludes,
    tHeads: currentTHeads as THeadRequiredProps,
  });

  return (
    <TableProvider
      excludes={excludes}
      data={data}
      tHeads={currentTHeads}
      {...options}
    >
      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between mb-6">
          <div className="flex items-center w-[50%]">
            <div>
              <h2 className="text-2xl">
                <strong>{title}</strong>
              </h2>
            </div>
            <When value={!!options.filters?.tag?.key}>
              <Tags<TableData>
                data={data}
                column={options.filters?.tag.key ?? ""}
              />
            </When>
          </div>
          <div className="flex lg:w-[30%] justify-end">
            {options.buttons}
            <When value={!!options.sort}>
              <Sort />
            </When>
            <When value={!!options.actions}>
              <Options actions={options.actions ?? []} />
            </When>
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-visible min-w-[30vw]">
          <table className=" w-full border-collapse" ref={ref}>
            <THead tHeads={tHeads} widths={currentTHeads?.widths} />
            <TBody onManagerColumn={handleManagerColumn} />
            <TFoot
              hasTFoot={hasTFoot}
              tHeads={tHeads}
              widths={currentTHeads?.widths}
            />
          </table>
        </div>
        <Pagination />
      </div>
    </TableProvider>
  );
}
