import { When } from "@components/utilities/When";

type Props = {
  tHeads: Array<string>;
  widths?: Array<number>;
  hasTFoot?: boolean;
};

export function TFoot({ tHeads, widths, hasTFoot }: Props) {
  return (
    <When value={hasTFoot}>
      <tfoot>
        <tr>
          {tHeads.map((key, index) => (
            <th
              key={`table_${index}`}
              style={{
                width: widths ? widths[index] : "auto",
              }}
              className="font-normal text-left"
            >
              {key}
            </th>
          ))}
        </tr>
      </tfoot>
    </When>
  );
}
