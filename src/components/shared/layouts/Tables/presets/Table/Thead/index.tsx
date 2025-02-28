import { When } from "@components/utilities/When";
import { useTableContext } from "../../../contexts/Table";

type Props = {
  tHeads: Array<string>;
  widths?: Array<number>;
};

export function THead({ tHeads, widths = [] }: Props) {
  const { amountHiddenCols } = useTableContext();

  return (
    <thead>
      <tr className="border-y-2 border-x-8 border-tertiary bg-tertiary ">
        {tHeads.map((tHead, key) => (
          <When
            key={`thead_${tHead}`}
            value={
              (key > 0 && key < tHeads.length - 1 && !amountHiddenCols[key]) ||
              key == 0 ||
              key == tHeads.length - 1
            }
          >
            <th
              style={{
                width: widths ? widths[key] : "auto",
              }}
              className="font-normal text-left"
            >
              {tHead}
            </th>
          </When>
        ))}
      </tr>
    </thead>
  );
}
