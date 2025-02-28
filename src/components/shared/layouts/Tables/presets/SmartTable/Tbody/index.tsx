import { TData } from "./TData";
import { useTableContext } from "../../../contexts/Table";

export function TBody() {
  const { paginatedTRows } = useTableContext();

  return (
    <tbody>
      {paginatedTRows.map((tDataValue, tDataIndex) => (
        <tr
          key={`row_${tDataIndex}`}
          className="border-y-[.75rem] border-x-8 border-white bg-white "
        >
          <TData data={tDataValue} keyRow={tDataIndex} />
        </tr>
      ))}
    </tbody>
  );
}
