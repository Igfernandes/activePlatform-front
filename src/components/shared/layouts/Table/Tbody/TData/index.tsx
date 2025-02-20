import { PossiblesTypesToComponents } from "../../../../../../types/primitive";
import { TDataProps } from "./type";

export function TData<TableData>({
  data,
  onManagerColumn,
}: TDataProps<TableData>) {
  return data.map((value, key) => (
    <td
      key={`data_${key}`}
      className="px-1"
      ref={(el: HTMLTableCellElement) =>
        onManagerColumn(el, { index: key, value })
      }
    >
      {value as PossiblesTypesToComponents}
    </td>
  ));
}
