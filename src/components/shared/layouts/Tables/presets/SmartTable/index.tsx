import { useTableData } from "../../hooks/useTableData";
import React, { useEffect } from "react";
import { TableProps, THeadRequiredProps } from "../../type";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { Pagination } from "../../utilities/Pagination";
import { THead } from "./Thead";
import { TFoot } from "./TFoot";
import { TBody } from "./Tbody";
import { When } from "@components/utilities/When";
import TableProvider from "../../contexts/Table";
import { Sort } from "../../utilities/Sort";
import { Options } from "../../utilities/Options";
import { Tags } from "../../utilities/Filters/Tags";
import { useColumnRules } from "../../hooks/useColumnRules";
import useWindow from "@hooks/useWindow";
import { MobileView } from "./MobileView";

export function SmartTable<TableData extends Array<Record<string, unknown>>>({
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
  const { ref, width } = useResizeObserver();
  const { windowSize } = useWindow();

  const { handleTruncateColumn, amountHiddenCols } = useColumnRules({
    tHeadsWidth: currentTHeads?.widths ?? [],
  });
  const { tHeads } = useTableData({
    data,
    excludes,
    tHeads: currentTHeads as THeadRequiredProps,
  });

  useEffect(() => {
    handleTruncateColumn(ref.current as HTMLTableElement);
  }, [width]);

  return (
    <TableProvider
      excludes={excludes}
      data={data}
      tHeads={currentTHeads}
      amountHiddenCols={amountHiddenCols}
      table={ref}
      {...options}
    >
      <div className="bg-white p-6 rounded-2xl">
        <div className="mb-2 md:mb-6">
          <div className="flex justify-between">
            <div className="flex items-center w-[60%]">
              <div className="mr-4">
                <h2 className="text-2xl">
                  <strong> {title}</strong>
                </h2>
              </div>
              <When
                value={!!options.filters?.tag?.key && windowSize.width > 800}
              >
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
          <div className="mt-2 md:mt-auto">
            <When
              value={!!options.filters?.tag?.key && windowSize.width <= 800}
            >
              <Tags<TableData>
                data={data}
                column={options.filters?.tag.key ?? ""}
              />
            </When>
          </div>
        </div>

        <div className="min-w-[30vw] ">
          <When value={windowSize.width > 650}>
            <table className="sm:table w-full border-collapse" ref={ref}>
              <THead tHeads={tHeads} widths={currentTHeads?.widths} />
              <TBody tHeads={tHeads} />
              <TFoot
                hasTFoot={hasTFoot}
                tHeads={tHeads}
                widths={currentTHeads?.widths}
              />
            </table>
          </When>
          <When value={windowSize.width <= 650}>
            <MobileView tHeaders={tHeads} />
          </When>
        </div>
        <Pagination />
      </div>
    </TableProvider>
  );
}
