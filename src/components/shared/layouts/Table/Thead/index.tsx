type Props = {
  tHeads: Array<string>;
  widths?: Array<number>;
};

export function THead({ tHeads, widths = [] }: Props) {
  return (
    <thead>
      <tr className="border-y-2 border-x-8 border-tertiary bg-tertiary">
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
    </thead>
  );
}
