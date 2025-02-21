import { useEffect, useState } from "react";
import { TData } from "./TData";
import { useTBody } from "./hooks/useTBody";
import { TBodyProps } from "./type";

export function TBody({
  data,
  onManagerColumn,
  sort,
  excludes,
  pagination,
}: TBodyProps) {
  const [tRows, setTRows] = useState<Array<unknown[]>>([]);
  const { handleSortTData, getTRows, paginateData } = useTBody({
    sort,
    excludes,
    pagination,
  });

  /** Manager of TData */
  useEffect(() => {
    // Organiza os dados com base na ordenação
    const tDataOrganized = handleSortTData(data);

    // Obtém as linhas organizadas
    const newtRows = getTRows(tDataOrganized);

    // Aplica a paginação
    const tRowsFilteredByPage = paginateData(newtRows);

    // Atualiza o estado com as linhas filtradas
    setTRows(tRowsFilteredByPage);
  }, [sort.type, pagination.current, data]);

  return (
    <tbody>
      {tRows.map((tDataValue, tDataIndex) => (
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
