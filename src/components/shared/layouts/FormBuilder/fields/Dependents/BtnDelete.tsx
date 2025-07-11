import { DependentsViewerProps } from "./type";

type Props = DependentsViewerProps & {
  index: number;
  text: React.ReactNode;
};

export function BtnDelete({ rows, setRows, setValue, index, text }: Props) {
  return (
    <button
      onClick={() => {
        const rowsUpdated = rows.filter((refValue, refKey) => refKey !== index);
        setRows(rowsUpdated);

        console.log(index, rows);
        setValue(JSON.stringify(rowsUpdated));
      }}
      type="button"
      className="bg-white shadow-2xl"
    >
      {text}
    </button>
  );
}
