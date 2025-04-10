import { TData } from "./TData";
import { useTableContext } from "../../../contexts/Table";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";

type Props = {
  tHeads: string[];
};

export function TBody({ tHeads }: Props) {
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
      <When value={paginatedTRows.length == 0}>
        <tr>
          <td colSpan={tHeads.length}>
            <div className="text-center py-7">
              <span className="text-zinc-500">{i18n(`words.not_found_register`)}</span>
            </div>
          </td>
        </tr>
      </When>
    </tbody>
  );
}
