import { TData } from "./TData";
import { TBodyProps } from "./type";
import { useTableContext } from "../contexts/Table";

export function TBody({ onManagerColumn }: TBodyProps) {
  const { paginatedTRows } = useTableContext();

  return (
    <tbody>
      {paginatedTRows.map((tDataValue, tDataIndex) => (
        <tr
          key={`row_${tDataIndex}`}
          className="border-y-[.75rem] border-x-8 border-white bg-white"
        >
          <TData onManagerColumn={onManagerColumn} data={tDataValue} />
        </tr>
      ))}
    </tbody>
  );
}
