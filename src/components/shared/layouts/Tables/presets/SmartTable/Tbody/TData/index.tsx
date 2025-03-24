import { When } from "@components/utilities/When";
import { PossiblesTypesToComponents } from "../../../../../../../../types/primitive";
import { useTableContext } from "../../../../contexts/Table";
import { TDataProps } from "./type";

export function TData<TableData>({ data, keyRow }: TDataProps<TableData>) {
  const { amountHiddenCols } = useTableContext();

  return data.map((value, index) => {
    const isVisible =
      index === 0 || index === data.length - 1 || !amountHiddenCols[index];

    return (
      <When key={`when_${keyRow}_${index}`} value={isVisible}>
        <td key={`data_${keyRow}_${index}`} className="px-1">
          <span
            className={`${
              !["function", "object"].includes(typeof value)
                ? "line-clamp-1"
                : ""
            }`}
          >
            {value as PossiblesTypesToComponents}
          </span>
        </td>
      </When>
    );
  });
}
